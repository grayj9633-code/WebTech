import { useState } from 'react';
import axios from 'axios';
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { BUSINESS, VEHICLE_OPTIONS, SERVICE_OPTIONS } from '../data/site';
import { Reveal, Eyebrow } from './Reveal';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const EMPTY = {
  name: '',
  company: '',
  phone: '',
  email: '',
  vehicle_type: '',
  service_needed: '',
  message: '',
  website: '',
};

const inputCls =
  'w-full border border-line bg-charcoal px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-brand';

const INFO = [
  { icon: MapPin, label: 'Shop Address', lines: [BUSINESS.address1, BUSINESS.address2] },
  { icon: Phone, label: 'Phone', lines: [BUSINESS.phone], href: BUSINESS.phoneHref, testId: 'contact-phone-link' },
  { icon: Mail, label: 'Email', lines: [BUSINESS.email], href: BUSINESS.emailHref, testId: 'contact-email-link' },
  { icon: Clock, label: 'Hours', lines: [BUSINESS.hoursDays, BUSINESS.hoursTime] },
];

export const ContactSection = () => {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [requestId, setRequestId] = useState('');

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      const res = await axios.post(`${API}/service-requests`, form);
      setRequestId(res.data.id || '');
      setStatus('success');
      setForm(EMPTY);
    } catch (err) {
      setStatus('error');
      setError(
        err.response?.data?.detail
          ? 'Please check the highlighted fields and try again.'
          : 'Something went wrong sending your request. Please call us instead.'
      );
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative bg-charcoal py-20 md:py-28">
      <div className="absolute inset-0 bg-grid-steel opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Contact Our Team</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-wide text-white sm:text-5xl">
            Request Service or Get a Repair Quote
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
            Tell us about your truck, trailer, or equipment and what it needs. We&apos;ll get back to
            you during business hours — or call the shop now for faster service.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="space-y-px border border-line bg-line">
              {INFO.map((item) => (
                <div key={item.label} className="flex gap-4 bg-surface p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line2 text-brand">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        data-testid={item.testId}
                        href={item.href}
                        className="mt-1 block font-display text-lg font-bold uppercase tracking-wide text-white transition-colors hover:text-brand"
                      >
                        {item.lines[0]}
                      </a>
                    ) : (
                      item.lines.map((line) => (
                        <p key={line} className="mt-0.5 font-display text-lg font-bold uppercase tracking-wide text-white">
                          {line}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 overflow-hidden border border-line">
              <iframe
                data-testid="contact-map"
                title="Map to Elite Truck-Trailer Repair & Engineering, 1480 6th St, Macon, GA 31206"
                src={BUSINESS.mapEmbed}
                className="h-64 w-full grayscale-[35%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.18} className="lg:col-span-3">
            <div className="border border-line bg-surface p-6 sm:p-8">
              {status === 'success' ? (
                <div data-testid="contact-form-success" className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center border border-brand text-brand">
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-bold uppercase tracking-wide text-white">
                    Service Request Received
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
                    Thank you — your request has been sent to our team. We&apos;ll contact you during
                    business hours (Mon–Sat, 9AM–5PM).
                    {requestId && requestId !== 'ok' && (
                      <span className="mt-2 block font-mono text-xs text-slate-500">
                        Reference: {requestId.slice(0, 8).toUpperCase()}
                      </span>
                    )}
                  </p>
                  <a
                    data-testid="success-call-link"
                    href={BUSINESS.phoneHref}
                    className="mt-8 inline-flex items-center gap-2 bg-brand px-6 py-3 font-display text-base font-bold uppercase tracking-widest text-charcoal transition-colors hover:bg-brand-hover"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Need it faster? Call {BUSINESS.phone}
                  </a>
                </div>
              ) : (
                <form data-testid="contact-form" onSubmit={handleSubmit} noValidate={false}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Name *
                      </label>
                      <input id="contact-name" data-testid="contact-name-input" required minLength={2} value={form.name} onChange={update('name')} className={inputCls} placeholder="Your full name" autoComplete="name" />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Company
                      </label>
                      <input id="contact-company" data-testid="contact-company-input" value={form.company} onChange={update('company')} className={inputCls} placeholder="Company or fleet name" autoComplete="organization" />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Phone *
                      </label>
                      <input id="contact-phone" data-testid="contact-phone-input" required minLength={7} type="tel" value={form.phone} onChange={update('phone')} className={inputCls} placeholder="(555) 555-5555" autoComplete="tel" />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Email *
                      </label>
                      <input id="contact-email" data-testid="contact-email-input" required type="email" value={form.email} onChange={update('email')} className={inputCls} placeholder="you@company.com" autoComplete="email" />
                    </div>
                    <div>
                      <label htmlFor="contact-vehicle" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Vehicle / Equipment Type *
                      </label>
                      <select id="contact-vehicle" data-testid="contact-vehicle-select" required value={form.vehicle_type} onChange={update('vehicle_type')} className={inputCls}>
                        <option value="" disabled>Select vehicle type</option>
                        {VEHICLE_OPTIONS.map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Service Needed *
                      </label>
                      <select id="contact-service" data-testid="contact-service-select" required value={form.service_needed} onChange={update('service_needed')} className={inputCls}>
                        <option value="" disabled>Select a service</option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="contact-message" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Message *
                      </label>
                      <textarea id="contact-message" data-testid="contact-message-input" required minLength={5} rows={5} value={form.message} onChange={update('message')} className={`${inputCls} resize-y`} placeholder="Tell us what's going on with your equipment — symptoms, warning lights, make/model, etc." />
                    </div>
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="contact-website">Website</label>
                      <input id="contact-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update('website')} />
                    </div>
                  </div>

                  {status === 'error' && (
                    <div data-testid="contact-form-error" className="mt-5 flex items-center gap-3 border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                      {error}
                    </div>
                  )}

                  <button
                    data-testid="contact-submit-btn"
                    type="submit"
                    disabled={status === 'submitting'}
                    className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-brand px-8 py-4 font-display text-lg font-bold uppercase tracking-widest text-charcoal transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                        Sending Request…
                      </>
                    ) : (
                      'Submit Service Request'
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
