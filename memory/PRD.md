# PRD — Elite Truck-Trailer Repair & Engineering Website

## Original Problem Statement
Build a complete, modern, professional website for Elite Truck-Trailer Repair & Engineering (ETTR), a heavy-duty commercial vehicle repair and engineering company at 1480 6th St, Macon, GA 31206. Industrial, trustworthy aesthetic (charcoal/navy/white/light gray + safety orange). Convert visitors into callers/form submitters. Reuse real photos from the old Wix site (elitetrucktrailer.com). No detailing language. No fake testimonials. Local SEO for truck/trailer repair Macon GA. Functional service-request form that emails submissions to eliterepair1480@gmail.com.

## User Decisions (confirmed)
- Contact form: save to DB AND email submissions to eliterepair1480@gmail.com (Emergent-managed Resend)
- Testimonials section: OMITTED until real reviews are provided (do not invent)
- Structure: one long homepage + separate /privacy and /terms pages
- Accent: safety orange (#FF5500) on charcoal/dark navy
- Brand abbreviation: ETTR
- Old-site photos recovered and reused: hero highway truck, yard lineup, fleet trio, ETT logo

## Architecture
- Frontend: React 19 + Tailwind + framer-motion (kinetic masked hero, scroll reveals, parallax) + Lenis smooth scroll. React Router routes: / , /privacy, /terms
- Backend: FastAPI, POST /api/service-requests (validate → MongoDB service_requests → email owner via Emergent email proxy with guardrail gate), GET /api/health
- DB: MongoDB via MONGO_URL/DB_NAME (test_database), collection: service_requests
- Images: /app/frontend/public/images/ (real shop photos + curated heavy-duty stock for service cards)

## User Personas
- Fleet manager / commercial operator needing fast, trustworthy repair
- Owner-operator truck driver with a breakdown or maintenance need
- Heavy equipment / coach operator seeking specialized repair or fabrication

## Core Requirements (static)
Sticky nav with persistent Request Service CTA + mobile tap-to-call; hero with headline "Heavy-Duty Truck & Trailer Repair You Can Depend On"; trust bar; about; 6 services; why-choose; vehicle types; 3-step process; dark CTA banner; contact section with form + map; footer with full business info; privacy/terms pages; LocalBusiness structured data; responsive + accessible.

## Implemented (2026-07-20)
- Full one-page site with all sections above (no testimonials per user choice)
- Kinetic hero: masked line-by-line headline reveal, parallax bg, safety-orange marquee band
- Working service-request form: validation, loading, honeypot, success state with reference ID; emails owner via Emergent managed Resend (verified email_sent:true)
- Real old-site photos integrated (hero, about yard, CTA fleet, ETT logo in footer)
- ETTR brand mark in navbar + footer
- SEO: title, meta description, keywords, OG tags, AutoRepair JSON-LD, descriptive alts
- Privacy Policy & Terms of Service pages
- Mobile verified: tap-to-call button, mobile menu, responsive layouts
- Roadside Service section (2026-07-20): "Truck Down? We Come to You." with hazard-stripe accents, on-site service bullets, call/request CTAs, honest shop-hours note; "Roadside Assistance" added to form dropdown, marquee, SEO keywords & JSON-LD
- Customer photo integration (2026-07-20): 5 owner-supplied photos processed (auto-cropped letterbox bars + finger smudge, color/contrast/sharpness graded) — new "Fresh From the Shop" asymmetric gallery section (all 5, with labels); real photos swapped into Engine Diagnostics (engine bay) and Custom Engineering (stainless fabrication) service cards

## Backlog
- P0: Add real customer testimonials when the owner provides them (section slot reserved in nav/design)
- P1: Owner-facing view of service requests (admin page or email-only is current state)
- P1: Custom domain + production deploy
- P2: Photo gallery page using more shop photos; 2 old-site images were unrecoverable from Wix (f58cb9_8efb…, f58cb9_18aa…)
- P2: Services detail pages for deeper SEO

## Next Tasks
1. Collect 2–3 real testimonials from the owner, add section
2. Deploy to production/custom domain when approved
3. Optional: Google Business Profile link + review embed
