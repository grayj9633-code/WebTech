from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import ipaddress
import logging
import uuid
import httpx
from pathlib import Path
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse
from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ.get("EMERGENT_EMAIL_KEY", "")
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
EMAIL_REPLY_TO = os.environ.get("EMAIL_REPLY_TO")
OWNER_EMAIL = os.environ["OWNER_EMAIL"]

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan()
    scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")


async def send_email(*, to: str, subject: str, html: str, reply_to: Optional[str] = None) -> Optional[str]:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": EMAIL_FROM_NAME}
    if reply_to or EMAIL_REPLY_TO:
        payload["contact_email"] = reply_to or EMAIL_REPLY_TO
    try:
        async with httpx.AsyncClient(timeout=30) as client_http:
            resp = await client_http.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
        return resp.json().get("id")
    except httpx.HTTPStatusError as e:
        logger.error(f"Email send failed: {e.response.status_code} {e.response.text}")
        raise HTTPException(status_code=502, detail="Failed to send email")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Email send error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send email")


class ServiceRequestCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    company: Optional[str] = Field(default="", max_length=120)
    phone: str = Field(min_length=7, max_length=40)
    email: EmailStr
    vehicle_type: str = Field(min_length=2, max_length=80)
    service_needed: str = Field(min_length=2, max_length=140)
    message: str = Field(min_length=5, max_length=3000)
    website: str = Field(default="", max_length=200)


def _row(label: str, value: str) -> str:
    return (f'<tr><td style="padding:8px 16px 8px 0;color:#64748B;font-size:13px;'
            f'text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;white-space:nowrap">'
            f'{escape(label)}</td>'
            f'<td style="padding:8px 0;color:#0F172A;font-size:15px">{value}</td></tr>')


def build_request_email(doc: dict) -> str:
    rows = "".join([
        _row("Name", escape(doc["name"])),
        _row("Company", escape(doc["company"] or "—")),
        _row("Phone", f'<a href="tel:{escape(doc["phone"])}" style="color:#E04B00">{escape(doc["phone"])}</a>'),
        _row("Email", f'<a href="mailto:{escape(doc["email"])}" style="color:#E04B00">{escape(doc["email"])}</a>'),
        _row("Vehicle / Equipment", escape(doc["vehicle_type"])),
        _row("Service Needed", escape(doc["service_needed"])),
        _row("Message", escape(doc["message"]).replace("\n", "<br>")),
        _row("Received", escape(doc["created_at"])),
    ])
    return (
        '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" '
        'style="background:#F1F5F9;padding:32px 16px;font-family:Arial,sans-serif">'
        '<tr><td align="center">'
        '<table role="presentation" width="600" cellpadding="0" cellspacing="0" '
        'style="background:#FFFFFF;border:1px solid #E2E8F0;border-top:4px solid #FF5500">'
        '<tr><td style="padding:24px 28px 8px">'
        '<p style="margin:0;font-size:12px;letter-spacing:0.2em;color:#E04B00;text-transform:uppercase">'
        'New Service Request</p>'
        f'<h1 style="margin:8px 0 0;font-size:22px;color:#0F172A">{escape(doc["name"])} needs service</h1>'
        '</td></tr>'
        f'<tr><td style="padding:16px 28px 8px"><table role="presentation" cellpadding="0" cellspacing="0">{rows}</table></td></tr>'
        '<tr><td style="padding:20px 28px 28px">'
        f'<p style="margin:0;font-size:12px;color:#94A3B8">Sent by the {escape(EMAIL_FROM_NAME)} website '
        'service-request form. Reply directly to the customer by phone or email above.</p>'
        '</td></tr></table></td></tr></table>'
    )


@api_router.get("/")
async def root():
    return {"message": "Elite Truck-Trailer Repair & Engineering API"}


@api_router.get("/health")
async def health():
    return {"status": "ok"}


@api_router.post("/service-requests")
async def create_service_request(payload: ServiceRequestCreate):
    if payload.website:
        return {"status": "success", "id": "ok"}
    doc = {
        "id": str(uuid.uuid4()),
        "name": payload.name.strip(),
        "company": (payload.company or "").strip(),
        "phone": payload.phone.strip(),
        "email": str(payload.email).strip(),
        "vehicle_type": payload.vehicle_type,
        "service_needed": payload.service_needed,
        "message": payload.message.strip(),
        "status": "new",
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.service_requests.insert_one(doc)
    email_id = None
    try:
        email_id = await send_email(
            to=OWNER_EMAIL,
            subject=f"New Service Request — {doc['name']} ({doc['service_needed']})",
            html=build_request_email(doc),
        )
    except Exception as e:
        logger.error(f"Owner notification email failed for request {doc['id']}: {e}")
    return {"status": "success", "id": doc["id"], "email_sent": bool(email_id)}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
