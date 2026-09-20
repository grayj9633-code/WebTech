const ITEMS = [
  'Engine Diagnostics',
  'Brake Systems',
  'Drivetrain & Transmission',
  'Trailer & Chassis',
  'Heavy Equipment',
  'Roadside Service',
  'Custom Engineering',
  'All Makes & Models',
  'Macon, Georgia',
];

export const Marquee = () => (
  <div
    data-testid="capabilities-marquee"
    className="relative z-20 -my-5 -rotate-1 scale-[1.02] overflow-hidden border-y-4 border-charcoal bg-brand py-4"
    aria-hidden="true"
  >
    <div className="flex w-max animate-marquee items-center">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex items-center">
          {ITEMS.map((item) => (
            <span
              key={`${copy}-${item}`}
              className="flex items-center whitespace-nowrap font-display text-2xl font-bold uppercase tracking-wider text-charcoal"
            >
              <span className="px-6">{item}</span>
              <span className="h-2.5 w-2.5 rotate-45 bg-charcoal" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
