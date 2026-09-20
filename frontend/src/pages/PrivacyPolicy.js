import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BUSINESS } from '../data/site';

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: `When you submit a service request or contact form on this website, we collect the information you provide directly: your name, company name, phone number, email address, vehicle or equipment type, the service you need, and any message you include. We also receive standard technical information (such as browser type and pages visited) that helps us keep the website secure and performing well.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use the information you provide solely to respond to your service request, schedule and perform repair or maintenance work, communicate with you about your vehicle or equipment, and operate our business. We do not sell, rent, or trade your personal information to third parties.`,
  },
  {
    title: 'Sharing of Information',
    body: `Your information is shared only with the team members and service providers necessary to respond to your request and operate this website (for example, our email delivery provider). We may disclose information if required by law or to protect our legal rights.`,
  },
  {
    title: 'Data Retention & Security',
    body: `Service request records are retained only as long as needed to serve you and meet normal business record-keeping requirements. We apply reasonable technical and organizational measures to protect your information, though no method of transmission over the internet is completely secure.`,
  },
  {
    title: 'Your Choices',
    body: `You may contact us at any time to ask what information we hold about you, request a correction, or ask us to delete your information. Reach us by phone at ${BUSINESS.phone} or by email at ${BUSINESS.email}.`,
  },
  {
    title: 'Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. This policy is effective as of July 1, 2026.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="App">
      <Navbar />
      <main className="bg-charcoal pt-32 pb-20 md:pt-40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase tracking-wide text-white sm:text-5xl">
            Privacy Policy
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
