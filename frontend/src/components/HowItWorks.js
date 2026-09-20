import { PhoneCall, Search, Wrench } from 'lucide-react';
import { STEPS } from '../data/site';
import { Reveal, Eyebrow } from './Reveal';

const ICONS = { PhoneCall, Search, Wrench };

export const HowItWorks = () => (
  <section id="process" data-testid="process-section" className="relative bg-charcoal py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <Eyebrow>The Process</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-wide text-white sm:text-5xl">
          How It Works
        </h2>
      </Reveal>

      <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
        <div
          className="absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-line2 md:block"
          aria-hidden="true"
        />
        {STEPS.map((step, i) => {
          const Icon = ICONS[step.icon];
          return (
            <Reveal key={step.num} delay={i * 0.14}>
              <div data-testid={`process-step-${step.num}`} className="relative">
                <div className="flex items-center gap-5">
                  <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center border border-line2 bg-charcoal font-mono text-lg font-semibold text-brand">
                    {step.num}
                  </span>
                  <Icon className="h-6 w-6 text-slate-500" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide text-white">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">{step.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
