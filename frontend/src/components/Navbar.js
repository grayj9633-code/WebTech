import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '../data/site';
import { scrollToId } from '../lib/scroll';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToId(id), 420);
    } else {
      scrollToId(id);
    }
  };

  return (
    <header
      data-testid="site-navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-charcoal/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-[72px] lg:px-8">
        <button
          data-testid="nav-brand"
          onClick={() => go('home')}
          className="group flex items-center gap-3 text-left"
          aria-label="Elite Truck-Trailer Repair & Engineering — home"
        >
          <span className="flex h-10 w-14 items-center justify-center bg-brand font-display text-sm font-bold tracking-wider text-charcoal clip-corner-sm transition-colors group-hover:bg-brand-hover">
            ETTR
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-bold uppercase tracking-wider text-white">
              Elite Truck-Trailer
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">
              Repair & Engineering
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              data-testid={`nav-link-${link.id}`}
              onClick={() => go(link.id)}
              className="font-mono text-xs uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-brand"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            data-testid="nav-call-link"
            href={BUSINESS.phoneHref}
            className="hidden items-center gap-2 font-mono text-sm font-semibold text-white transition-colors hover:text-brand md:flex"
          >
            <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
            {BUSINESS.phone}
          </a>
          <button
            data-testid="nav-request-service-btn"
            onClick={() => go('contact')}
            className="hidden bg-brand px-5 py-2.5 font-display text-sm font-bold uppercase tracking-widest text-charcoal transition-colors hover:bg-brand-hover sm:block"
          >
            Request Service
          </button>
          <a
            data-testid="nav-mobile-call-btn"
            href={BUSINESS.phoneHref}
            aria-label={`Call ${BUSINESS.phone}`}
            className="flex h-10 w-10 items-center justify-center border border-line text-brand lg:hidden"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center border border-line text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="border-t border-line bg-charcoal/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                data-testid={`mobile-nav-link-${link.id}`}
                onClick={() => go(link.id)}
                className="border-b border-line/60 py-3 text-left font-display text-xl font-semibold uppercase tracking-wider text-slate-200 transition-colors hover:text-brand"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <button
                data-testid="mobile-request-service-btn"
                onClick={() => go('contact')}
                className="bg-brand px-5 py-3.5 font-display text-base font-bold uppercase tracking-widest text-charcoal"
              >
                Request Service
              </button>
              <a
                data-testid="mobile-call-now-btn"
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 border border-line2 px-5 py-3.5 font-display text-base font-bold uppercase tracking-widest text-white"
              >
                <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                Call {BUSINESS.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
