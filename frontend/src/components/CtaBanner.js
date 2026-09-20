import { Phone } from 'lucide-react';
import { BUSINESS } from '../data/site';
import { Reveal } from './Reveal';
import { scrollToId } from '../lib/scroll';

export const CtaBanner = () => (
  <section data-testid="cta-banner" className="relative overflow-hidden py-24 md:py-32">
    <div className="absolute inset-0" aria-hidden="true">
      <img
        src="/images/fleet-trio.jpg"
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/88" />
      <div className="absolute inset-0 bg-grid-steel opacity-25" />
    </div>
    <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand">
          Macon, Georgia — Mon–Sat 9AM–5PM
        </p>
        <h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-wide text-white sm:text-5xl lg:text-6xl">
          Need Heavy-Duty Repair or Service?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          Don&apos;t let equipment problems keep your business off the road. Contact Elite
          Truck-Trailer Repair &amp; Engineering today.
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            data-testid="cta-request-service-btn"
            onClick={() => scrollToId('contact')}
            className="bg-brand px-9 py-4 font-display text-lg font-bold uppercase tracking-widest text-charcoal transition-colors hover:bg-brand-hover"
          >
            Request Service
          </button>
          <a
            data-testid="cta-call-btn"
            href={BUSINESS.phoneHref}
            className="flex items-center justify-center gap-3 border border-line2 px-9 py-4 font-display text-lg font-bold uppercase tracking-widest text-white transition-colors hover:border-brand hover:text-brand"
          >
            <Phone className="h-5 w-5 text-brand" aria-hidden="true" />
            Call {BUSINESS.phone}
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
