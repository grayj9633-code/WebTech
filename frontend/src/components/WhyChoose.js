import { Wrench, Cpu, Truck, ShieldCheck, BadgeCheck, Clock } from 'lucide-react';
import { WHY_POINTS } from '../data/site';
import { Reveal, Eyebrow } from './Reveal';

const ICONS = { Wrench, Cpu, Truck, ShieldCheck, BadgeCheck, Clock };

export const WhyChoose = () => (
  <section id="why-elite" data-testid="why-elite-section" className="relative overflow-hidden bg-steel py-20 md:py-28">
    <div className="absolute inset-0 bg-diamond opacity-60" aria-hidden="true" />
    <span
      className="pointer-events-none absolute -right-8 top-8 select-none font-display text-[180px] font-extrabold uppercase leading-none text-outline lg:text-[260px]"
      aria-hidden="true"
    >
      Elite
    </span>
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <Eyebrow>Why Elite</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-wide text-white sm:text-5xl">
          Why Fleets &amp; Commercial Operators Choose Elite
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {WHY_POINTS.map((point, i) => {
          const Icon = ICONS[point.icon];
          return (
            <Reveal key={point.title} delay={(i % 3) * 0.08} className="h-full">
              <div
                data-testid={`why-card-${i + 1}`}
                className="group flex h-full flex-col bg-steel p-7 transition-colors duration-300 hover:bg-elevated"
              >
                <span className="flex h-12 w-12 items-center justify-center border border-line2 text-brand transition-colors group-hover:border-brand">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{point.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
