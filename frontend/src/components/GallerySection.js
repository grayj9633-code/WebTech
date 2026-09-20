import { Reveal, Eyebrow } from './Reveal';

const ITEMS = [
  {
    src: '/images/shop-freightliner-front.jpg',
    tag: 'Fleet Work',
    title: 'Freightliner Cascadia',
    alt: 'White Freightliner Cascadia semi truck front view serviced at Elite Truck-Trailer Repair in Macon, GA',
    span: 'lg:col-span-7',
    height: 'h-[320px] sm:h-[420px] lg:h-[500px]',
  },
  {
    src: '/images/shop-fabrication.jpg',
    tag: 'Custom Fab',
    title: 'Stainless Build-Out',
    alt: 'Custom stainless steel fabrication and installation by Elite Truck-Trailer Repair & Engineering',
    span: 'lg:col-span-5',
    height: 'h-[320px] sm:h-[420px] lg:h-[500px]',
  },
  {
    src: '/images/shop-engine-bay.jpg',
    tag: 'Engine Service',
    title: 'Intake & Cooling',
    alt: 'Heavy-duty truck engine bay intake and cooling system service in Macon, Georgia',
    span: 'lg:col-span-4',
    height: 'h-[280px] sm:h-[340px] lg:h-[400px]',
  },
  {
    src: '/images/shop-tractor-1014.jpg',
    tag: 'In the Yard',
    title: 'Tractor 1014',
    alt: 'Fleet semi tractor at the Elite Truck-Trailer Repair yard on 6th St, Macon, GA',
    span: 'lg:col-span-4',
    height: 'h-[280px] sm:h-[340px] lg:h-[400px]',
  },
  {
    src: '/images/shop-mack.jpg',
    tag: 'All Makes',
    title: 'Mack Trucks Welcome',
    alt: 'Mack truck front end — Elite services all makes and models of commercial trucks',
    span: 'lg:col-span-4',
    height: 'h-[280px] sm:h-[340px] lg:h-[400px]',
  },
];

export const GallerySection = () => (
  <section id="shop-work" data-testid="gallery-section" className="relative bg-charcoal py-20 md:py-28">
    <div className="absolute inset-0 bg-grid-steel opacity-25" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <Eyebrow>Straight From Our Yard</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-wide text-white sm:text-5xl">
            Fresh From the Shop
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-md text-base leading-relaxed text-slate-400">
            Real trucks, real work — a look at what rolls through our Macon shop and yard.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-12">
        {ITEMS.map((item, i) => (
          <Reveal key={item.src} delay={(i % 3) * 0.08} className={item.span}>
            <figure
              data-testid={`gallery-item-${i + 1}`}
              className={`group relative w-full overflow-hidden border border-line clip-corner transition-colors duration-300 hover:border-brand ${item.height}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent"
                aria-hidden="true"
              />
              <span className="absolute left-4 top-4 font-mono text-xs font-semibold tracking-[0.2em] text-brand">
                /0{i + 1}
              </span>
              <figcaption className="absolute bottom-4 left-4 right-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand">{item.tag}</p>
                <p className="mt-1 font-display text-xl font-bold uppercase tracking-wide text-white">
                  {item.title}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
