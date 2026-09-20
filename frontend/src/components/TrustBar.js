import { Wrench, Truck, BadgeCheck, Zap } from 'lucide-react';
import { TRUST_ITEMS } from '../data/site';
import { Reveal } from './Reveal';

const ICONS = { Wrench, Truck, BadgeCheck, Zap };

export const TrustBar = () => (
  <section data-testid="trust-bar" className="relative border-b border-line bg-surface">
    <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
      {TRUST_ITEMS.map((item, i) => {
        const Icon = ICONS[item.icon];
        return (
          <Reveal key={item.title} delay={i * 0.08} className="h-full">
            <div className="group flex h-full items-center gap-4 px-6 py-6 transition-colors hover:bg-elevated">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-line text-brand transition-colors group-hover:border-brand">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-lg font-bold uppercase tracking-wide text-white">
                  {item.title}
                </span>
                <span className="block text-sm text-slate-400">{item.subtitle}</span>
              </span>
            </div>
          </Reveal>
        );
      })}
    </div>
  </section>
);
