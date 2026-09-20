import { Phone, Siren, ScanSearch, Wrench, Zap } from 'lucide-react';
import { BUSINESS } from '../data/site';
import { Reveal, Eyebrow } from './Reveal';
import { scrollToId } from '../lib/scroll';

const ROADSIDE_POINTS = [
  { icon: ScanSearch, text: 'Mobile engine & system diagnostics' },
  { icon: Wrench, text: 'On-site truck & trailer repair' },
  { icon: Zap, text: 'Brake, air & electrical issues' },
  { icon: Siren, text: 'Breakdown service to get you rolling again' },
];

export const RoadsideSection = () => (
  <section id="roadside" data-testid="roadside-section" className="relative overflow-hidden bg-surface">
    <div className="h-2.5 bg-hazard" aria-hidden="true" />
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:gap-16 lg:px-8">
      <div>
        <Reveal>
          <Eyebrow>Roadside Service</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-wide text-white sm:text-5xl">
            Truck Down? <span className="text-brand">We Come to You.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
            Breakdowns don&apos;t wait for a convenient time. Elite provides roadside and on-site
            service for commercial trucks, trailers, and equipment — mobile diagnostics and repairs
            that get your equipment moving again without a tow.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {ROADSIDE_POINTS.map((point, i) => (
            <Reveal key={point.text} delay={0.1 + i * 0.07}>
              <div className="flex items-center gap-3 border border-line bg-charcoal px-4 py-3.5">
                <point.icon className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-sm font-medium text-slate-200">{point.text}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.35}>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              data-testid="roadside-call-btn"
              href={BUSINESS.phoneHref}
              className="flex items-center justify-center gap-3 bg-brand px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-charcoal transition-colors hover:bg-brand-hover"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {BUSINESS.phone}
            </a>
            <button
              data-testid="roadside-request-btn"
              onClick={() => scrollToId('contact')}
              className="border border-line2 px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-white transition-colors hover:border-brand hover:text-brand"
            >
              Request Service
            </button>
          </div>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
            Available during shop hours — {BUSINESS.hoursDays}, {BUSINESS.hoursTime}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="relative">
        <div className="relative">
          <div className="absolute -right-4 -top-4 h-full w-full border-2 border-brand" aria-hidden="true" />
          <img
            src="/images/roadside.jpg"
            alt="Semi truck on the highway — roadside and on-site truck repair service in Macon, Georgia"
            loading="lazy"
            className="relative w-full clip-corner object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          />
          <div className="absolute bottom-6 left-6 bg-charcoal px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand">On-Site Service</p>
            <p className="font-display text-lg font-bold uppercase tracking-wide text-white">
              We Come to Your Location
            </p>
          </div>
        </div>
      </Reveal>
    </div>
    <div className="h-2.5 bg-hazard" aria-hidden="true" />
  </section>
);
