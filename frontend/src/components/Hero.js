import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, ChevronDown, MapPin } from 'lucide-react';
import { BUSINESS } from '../data/site';
import { scrollToId } from '../lib/scroll';

const HEADLINE = [
  { text: 'Heavy-Duty Truck &' },
  { text: 'Trailer Repair' },
  { text: 'You Can Depend On', accent: true },
];

const TRUST = ['Serving commercial vehicles', 'All makes & models', 'Professional technicians'];

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 180]);
  const scale = useTransform(scrollY, [0, 900], [1.08, 1.22]);

  return (
    <section id="home" data-testid="hero-section" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/hero-truck.jpg"
          alt=""
          className="h-full w-full object-cover"
          fetchpriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/75 to-charcoal/20" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-steel opacity-40" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-36 sm:px-6 md:pb-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-brand" aria-hidden="true" />
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand">
            Macon, Georgia — Repair • Maintenance • Engineering
          </p>
        </motion.div>

        <h1 className="max-w-5xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-wide text-white sm:text-6xl lg:text-7xl">
          {HEADLINE.map((line, i) => (
            <span key={line.text} className="block overflow-hidden pb-1">
              <motion.span
                className={`block ${line.accent ? 'text-brand' : ''}`}
                initial={{ y: '112%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.25 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg"
        >
          Professional repair, maintenance, diagnostics, and engineering solutions for trucks,
          trailers, coaches, and heavy equipment. We help keep your equipment working and your
          business moving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <button
            data-testid="hero-request-service-btn"
            onClick={() => scrollToId('contact')}
            className="group relative overflow-hidden bg-brand px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-charcoal transition-colors hover:bg-brand-hover"
          >
            <span className="relative z-10">Request Service</span>
          </button>
          <a
            data-testid="hero-call-now-btn"
            href={BUSINESS.phoneHref}
            className="flex items-center justify-center gap-3 border border-line2 bg-charcoal/40 px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:border-brand hover:text-brand"
          >
            <Phone className="h-5 w-5 text-brand" aria-hidden="true" />
            Call {BUSINESS.phone}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.25 }}
          className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400"
          data-testid="hero-trust-statement"
        >
          <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
          {TRUST.map((t, i) => (
            <span key={t} className="flex items-center gap-4">
              {t}
              {i < TRUST.length - 1 && <span className="h-1 w-1 rotate-45 bg-brand" aria-hidden="true" />}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.button
        data-testid="hero-scroll-indicator"
        onClick={() => scrollToId('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 right-6 z-10 hidden flex-col items-center gap-2 text-slate-400 transition-colors hover:text-brand md:flex"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </motion.button>
    </section>
  );
};
