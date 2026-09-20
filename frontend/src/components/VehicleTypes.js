import { Truck, Container, Package, Bus, Tractor, Route, Phone } from 'lucide-react';
import { VEHICLES, BUSINESS } from '../data/site';
import { Reveal, Eyebrow } from './Reveal';

const ICONS = { Truck, Container, Package, Bus, Tractor, Route };

export const VehicleTypes = () => (
  <section id="vehicles" data-testid="vehicles-section" className="bg-mist py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <Eyebrow dark>Equipment We Service</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-wide text-ink sm:text-5xl">
            Vehicle Types We Service
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-md text-base leading-relaxed text-slate-600">
            If it works for a living, we work on it — all makes and models of commercial trucks,
            trailers, and heavy equipment.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {VEHICLES.map((vehicle, i) => {
          const Icon = ICONS[vehicle.icon];
          return (
            <Reveal key={vehicle.name} delay={(i % 3) * 0.08}>
              <div
                data-testid={`vehicle-card-${i + 1}`}
                className="group flex h-full items-center gap-5 border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)]"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-charcoal text-brand clip-corner-sm transition-colors group-hover:bg-brand group-hover:text-charcoal">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
                    {vehicle.name}
                  </h3>
                  <p className="text-sm text-slate-500">{vehicle.desc}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border border-slate-300 bg-white p-6 sm:flex-row sm:items-center">
          <p className="text-sm font-medium text-slate-600">
            Don&apos;t see your equipment listed? We service all makes &amp; models — call the shop and ask.
          </p>
          <a
            data-testid="vehicles-call-link"
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 whitespace-nowrap font-display text-base font-bold uppercase tracking-widest text-brand transition-colors hover:text-ink"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {BUSINESS.phone}
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
