import { Cog, Disc, Settings, Container, Tractor, Wrench, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/site';
import { Reveal, Eyebrow } from './Reveal';
import { scrollToId } from '../lib/scroll';

const ICONS = { Cog, Disc, Settings, Container, Tractor, Wrench };

export const ServicesGrid = () => (
  <section id="services" data-testid="services-section" className="relative bg-charcoal py-20 md:py-28">
    <div className="absolute inset-0 bg-grid-steel opacity-30" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-wide text-white sm:text-5xl">
            Heavy-Duty Repair &amp; Engineering Services
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-md text-base leading-relaxed text-slate-400">
            Full-service commercial vehicle care under one roof — diagnostics, repair, maintenance,
            and custom engineering for all makes and models.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[service.icon];
          return (
            <Reveal key={service.num} delay={(i % 3) * 0.1}>
              <article
                data-testid={`service-card-${service.num}`}
                className="group flex h-full flex-col border border-line bg-surface transition-colors duration-300 hover:border-brand"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" aria-hidden="true" />
                  <span className="absolute left-4 top-4 font-mono text-xs font-semibold tracking-[0.2em] text-brand">
                    /{service.num}
                  </span>
                  <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center bg-brand text-charcoal clip-corner-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{service.desc}</p>
                  <button
                    data-testid={`service-request-btn-${service.num}`}
                    onClick={() => scrollToId('contact')}
                    className="mt-6 inline-flex items-center gap-2 self-start font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand transition-colors hover:text-white"
                  >
                    Request Service
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
