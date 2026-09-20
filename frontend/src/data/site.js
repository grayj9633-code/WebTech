export const BUSINESS = {
  name: 'Elite Truck-Trailer Repair & Engineering',
  shortName: 'Elite Truck-Trailer',
  tagline: 'Heavy-Duty Truck, Trailer & Equipment Repair',
  phone: '(470) 870-6542',
  phoneHref: 'tel:+14708706542',
  email: 'eliterepair1480@gmail.com',
  emailHref: 'mailto:eliterepair1480@gmail.com',
  address1: '1480 6th St',
  address2: 'Macon, GA 31206',
  addressFull: '1480 6th St, Macon, GA 31206',
  hoursDays: 'Monday–Saturday',
  hoursTime: '9:00 AM–5:00 PM',
  mapEmbed:
    'https://maps.google.com/maps?q=1480%206th%20St%2C%20Macon%2C%20GA%2031206&t=&z=14&ie=UTF8&iwloc=&output=embed',
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'why-elite', label: 'Why Elite' },
  { id: 'contact', label: 'Contact' },
];

export const TRUST_ITEMS = [
  { icon: 'Wrench', title: 'Heavy-Duty Specialists', subtitle: 'Trucks, trailers, coaches & equipment' },
  { icon: 'Truck', title: 'All Makes & Models', subtitle: 'Every commercial brand serviced' },
  { icon: 'BadgeCheck', title: 'Experienced Technicians', subtitle: 'Professional, career mechanics' },
  { icon: 'Zap', title: 'Fast, Reliable Service', subtitle: 'Built to minimize your downtime' },
];

export const SERVICES = [
  {
    num: '01',
    icon: 'Cog',
    title: 'Engine Diagnostics & Repair',
    desc: 'Professional engine diagnostics, troubleshooting, maintenance, and repair for heavy-duty trucks and commercial vehicles.',
    image: '/images/service-engine.jpg',
    alt: 'Technician performing diesel engine diagnostics on a heavy-duty semi truck in Macon, GA',
  },
  {
    num: '02',
    icon: 'Disc',
    title: 'Brake System Repair',
    desc: 'Inspection, diagnosis, maintenance, and repair of heavy-duty braking systems to help keep commercial vehicles operating safely.',
    image: '/images/service-brakes.jpg',
    alt: 'Heavy-duty truck brake system inspection and repair',
  },
  {
    num: '03',
    icon: 'Settings',
    title: 'Drivetrain & Transmission',
    desc: 'Diagnostics, maintenance, and repair for transmissions, drivetrains, and related heavy-duty components.',
    image: '/images/service-drivetrain.jpg',
    alt: 'Commercial truck transmission and drivetrain repair',
  },
  {
    num: '04',
    icon: 'Container',
    title: 'Trailer & Chassis Repair',
    desc: 'Repair and maintenance for commercial trailers including dry vans, flatbeds, chassis, and other trailer configurations.',
    image: '/images/service-trailer.jpg',
    alt: 'Commercial trailer and chassis repair shop',
  },
  {
    num: '05',
    icon: 'Tractor',
    title: 'Heavy Equipment Repair',
    desc: 'Repair and maintenance services for heavy equipment and machinery that keep your operation working.',
    image: '/images/service-equipment.jpg',
    alt: 'Heavy equipment and machinery repair service',
  },
  {
    num: '06',
    icon: 'Wrench',
    title: 'Custom Engineering Solutions',
    desc: 'Custom repair, modification, fabrication, and engineering solutions for specialized commercial equipment and vehicle requirements.',
    image: '/images/service-engineering.jpg',
    alt: 'Custom fabrication and engineering work on commercial vehicle components',
  },
];

export const WHY_POINTS = [
  {
    icon: 'Wrench',
    title: 'Experienced Heavy-Duty Technicians',
    desc: 'Career professionals who work on commercial trucks, trailers, and equipment every day — not passenger cars.',
  },
  {
    icon: 'Cpu',
    title: 'Professional Diagnostic Equipment',
    desc: 'Modern diagnostic tooling to find the real problem fast, instead of guessing and replacing parts.',
  },
  {
    icon: 'Truck',
    title: 'All Makes & Models',
    desc: 'Every major commercial truck and trailer brand serviced — one shop for your entire operation.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Commercial Vehicle Expertise',
    desc: 'Deep familiarity with the systems, safety requirements, and duty cycles of working vehicles.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Reliable Workmanship',
    desc: 'Repairs done right and checked before your equipment leaves the shop.',
  },
  {
    icon: 'Clock',
    title: 'Focus on Minimizing Downtime',
    desc: 'Efficient scheduling and turnaround, because every hour off the road costs you money.',
  },
];

export const VEHICLES = [
  { icon: 'Truck', name: 'Semi Trucks', desc: 'Class 8 tractors, day cabs & sleepers' },
  { icon: 'Container', name: 'Commercial Trucks', desc: 'Box trucks, straight trucks & vocational' },
  { icon: 'Package', name: 'Trailers', desc: 'Dry vans, flatbeds, reefers & chassis' },
  { icon: 'Bus', name: 'Coaches', desc: 'Motorcoaches & commercial buses' },
  { icon: 'Tractor', name: 'Heavy Equipment', desc: 'Construction & industrial machinery' },
  { icon: 'Route', name: 'Fleet Vehicles', desc: 'Multi-unit commercial fleet service' },
];

export const STEPS = [
  {
    num: '01',
    icon: 'PhoneCall',
    title: 'Contact Us',
    desc: 'Tell us about your truck, trailer, or equipment issue — call the shop or send a service request online.',
  },
  {
    num: '02',
    icon: 'Search',
    title: 'Diagnose & Inspect',
    desc: 'Our technicians identify the problem, inspect the vehicle, and determine the appropriate repair.',
  },
  {
    num: '03',
    icon: 'Wrench',
    title: 'Repair & Get Back on the Road',
    desc: 'We complete the work efficiently so you can get your equipment back in service.',
  },
];

export const VEHICLE_OPTIONS = [
  'Semi Truck',
  'Commercial Truck',
  'Trailer',
  'Coach / Bus',
  'Heavy Equipment',
  'Fleet Vehicle',
  'Other',
];

export const SERVICE_OPTIONS = [
  'Engine Diagnostics & Repair',
  'Brake System Repair',
  'Drivetrain & Transmission',
  'Trailer & Chassis Repair',
  'Heavy Equipment Repair',
  'Custom Engineering / Fabrication',
  'Preventive Maintenance',
  'Other / Not Sure',
];
