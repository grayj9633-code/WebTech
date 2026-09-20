import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BUSINESS } from '../data/site';

const SECTIONS = [
  {
    title: 'Use of This Website',
    body: `This website is provided by ${BUSINESS.name} ("Elite", "we", "us") for informational purposes and to allow customers to request service. By using this website you agree to these terms. The content on this site is general in nature and does not constitute a repair estimate, diagnosis, or professional advice for your specific vehicle or equipment.`,
  },
  {
    title: 'Service Requests & Estimates',
    body: `Submitting a service request through this website does not create a binding service agreement. All work is subject to inspection, diagnosis, parts availability, and a written or verbal estimate approved by you before work begins. Final pricing may differ from preliminary discussions based on the actual condition of the vehicle or equipment.`,
  },
  {
    title: 'Business Hours & Communication',
    body: `Our shop operates ${BUSINESS.hoursDays}, ${BUSINESS.hoursTime}. Online requests submitted outside business hours are reviewed the next business day. For urgent needs, call ${BUSINESS.phone} during business hours.`,
  },
  {
    title: 'Intellectual Property',
    body: `All text, imagery, logos, and design elements on this website are the property of ${BUSINESS.name} or used with permission, and may not be reproduced without written consent.`,
  },
  {
    title: 'Limitation of Liability',
    body: `We work hard to keep this website accurate and available, but it is provided "as is" without warranties of any kind. To the fullest extent permitted by law, ${BUSINESS.name} is not liable for damages arising from use of this website or reliance on its content.`,
  },
  {
    title: 'Contact',
    body: `Questions about these terms? Contact us at ${BUSINESS.phone} or ${BUSINESS.email}, or visit us at ${BUSINESS.addressFull}. These terms are effective as of July 1, 2026.`,
  },
];

export default function TermsOfService() {
  return (
    <div className="App">
      <Navbar />
      <main className="bg-charcoal pt-32 pb-20 md:pt-40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase tracking-wide text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-slate-400">
            {BUSINESS.name} — {BUSINESS.addressFull}
          </p>
          <div className="mt-12 space-y-10">
            {SECTIONS.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
