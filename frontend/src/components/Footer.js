import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '../data/site';
import { scrollToId } from '../lib/scroll';

export const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-line bg-[#0A0B0E]">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-14 items-center justify-center bg-brand font-display text-sm font-bold tracking-wider text-charcoal clip-corner-sm">
            ETTR
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-bold uppercase tracking-wider text-white">
              Elite Truck-Trailer
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
              Repair & Engineering
            </span>
          </span>
        </div>
        <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
          {BUSINESS.tagline} — professional diagnostics, maintenance, repair, and custom
          engineering for commercial vehicles in Macon, Georgia.
        </p>
        <img
          src="/images/elite-logo.jpg"
          alt="Elite Truck-Trailer Repair & Engineering logo"
          loading="lazy"
          className="mt-6 w-40 rounded-sm border border-line bg-white object-contain p-1"
        />
      </div>

      <nav aria-label="Footer">
        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">Navigate</h3>
        <ul className="mt-5 space-y-3">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                data-testid={`footer-link-${link.id}`}
                onClick={() => scrollToId(link.id)}
                className="text-sm text-slate-300 transition-colors hover:text-brand"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">Legal</h3>
        <ul className="mt-5 space-y-3">
          <li>
            <Link data-testid="footer-privacy-link" to="/privacy" className="text-sm text-slate-300 transition-colors hover:text-brand">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link data-testid="footer-terms-link" to="/terms" className="text-sm text-slate-300 transition-colors hover:text-brand">
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">Contact</h3>
        <ul className="mt-5 space-y-4 text-sm text-slate-300">
          <li className="flex gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            <span>{BUSINESS.address1}<br />{BUSINESS.address2}</span>
          </li>
          <li>
            <a data-testid="footer-phone-link" href={BUSINESS.phoneHref} className="flex gap-3 transition-colors hover:text-brand">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {BUSINESS.phone}
            </a>
          </li>
          <li>
            <a data-testid="footer-email-link" href={BUSINESS.emailHref} className="flex gap-3 break-all transition-colors hover:text-brand">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {BUSINESS.email}
            </a>
          </li>
          <li className="flex gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            <span>{BUSINESS.hoursDays}<br />{BUSINESS.hoursTime}</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 sm:px-6 md:flex-row lg:px-8">
        <p>© {new Date().getFullYear()} {BUSINESS.name}</p>
        <p>{BUSINESS.tagline} — Macon, GA</p>
      </div>
    </div>
  </footer>
);
