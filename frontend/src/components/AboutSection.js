import { ArrowRight } from 'lucide-react';
import { Reveal, Eyebrow } from './Reveal';
import { scrollToId } from '../lib/scroll';

const CHAPTERS = [
  { num: '01', title: 'Skilled Technicians', desc: 'Professional mechanics who specialize in commercial vehicles — trucks, trailers, coaches, and heavy equipment.' },
  { num: '02', title: 'Professional Equipment', desc: 'A properly equipped shop with modern diagnostic and repair tooling for heavy-duty work.' },
  { num: '03', title: 'Efficient Diagnostics', desc: 'We find the real problem quickly, so repairs are accurate, reliable, and cost-effective.' },
  { num: '04', title: 'Reduced Downtime', desc: 'Every process is built around getting your equipment back in service and keeping your business moving.' },
];

export const AboutSection = () => (
  <section id="about" data-testid="about-section" className="relative bg-mist py-20 md:py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
      <div>
        <Reveal>
          <Eyebrow dark>About Elite — Macon, GA</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-wide text-ink sm:text-5xl">
            Built to Keep Your Equipment Moving
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            Elite Truck-Trailer Repair &amp; Engineering provides heavy-duty repair, maintenance,
            diagnostics, and custom engineering solutions for commercial vehicles and equipment.
            From single owner-operators to commercial fleets, we service all makes and models of
            trucks and trailers — with reliable workmanship and a process built around your uptime.
          </p>
        </Reveal>
        <div className="mt-10 space-y-6">
          {CHAPTERS.map((ch, i) => (
            <Reveal key={ch.num} delay={0.12 + i * 0.08}>
              <div className="group flex gap-5 border-b border-slate-300 pb-6">
                <span className="font-mono text-sm font-semibold text-brand">{ch.num}</span>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ink transition-colors group-hover:text-brand">
                    {ch.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{ch.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.4}>
          <button
            data-testid="about-learn-more-btn"
            onClick={() => scrollToId('why-elite')}
            className="mt-10 inline-flex items-center gap-3 bg-ink px-7 py-3.5 font-display text-base font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand hover:text-charcoal"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="relative">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full border-2 border-brand" aria-hidden="true" />
          <img
            src="/images/yard-lineup.jpg"
            alt="Semi trucks lined up at the Elite Truck-Trailer Repair & Engineering facility in Macon, Georgia"
            className="relative w-full clip-corner object-cover shadow-[0_20px_50px_rgba(15,23,42,0.25)]"
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 bg-charcoal px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand">Our Yard</p>
            <p className="font-display text-lg font-bold uppercase tracking-wide text-white">
              1480 6th St — Macon, GA
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
