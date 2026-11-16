import { useState } from 'react';
import LegalLayout from '../components/LegalLayout';
import PageMeta from '../components/PageMeta';
import { SITE } from '../constants/site';

const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('Propden Support');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `${name ? `From: ${name}\n\n` : ''}${message}`;
    window.location.href = `mailto:${SITE.supportEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <LegalLayout
      eyebrow="Contact"
      title="Contact & Grievance Officer"
      subtitle="We respond to support emails within 1–2 business days."
    >
      <PageMeta
        title="Contact & Grievance Officer — Propden"
        description="Contact Propden support or the Grievance Officer at hello@propden.in."
        path="/contact"
      />

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-[#F8F9FB] p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Support Email
          </h2>
          <p className="mt-2 text-base font-bold text-[#1F2A44]">
            <a
              href={`mailto:${SITE.supportEmail}`}
              className="text-[#2E6B4F] underline underline-offset-4"
            >
              {SITE.supportEmail}
            </a>
          </p>
          <p className="mt-1 text-sm text-gray-600">Response within 1–2 business days.</p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-[#F8F9FB] p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Developer / Legal Name
          </h2>
          <p className="mt-2 text-base font-bold text-[#1F2A44]">{SITE.legalName}</p>
          <p className="mt-1 text-sm text-gray-600">{SITE.address}</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-5">
        <h2 className="text-lg font-bold text-[#1F2A44]">Grievance Officer</h2>
        <p className="mt-2 text-sm text-gray-700">
          <strong>Name:</strong> {SITE.grievanceOfficer}
          <br />
          <strong>Email:</strong>{' '}
          <a
            href={`mailto:${SITE.privacyEmail}`}
            className="font-medium text-[#2E6B4F] underline"
          >
            {SITE.privacyEmail}
          </a>
          <br />
          <strong>Address:</strong> {SITE.address}
        </p>
        <p className="mt-2 text-xs text-gray-500">
          We will acknowledge complaints within 48 hours and try to resolve them within 30
          days.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">Send an email</h2>
        <p className="mt-1 text-sm text-gray-600">
          This opens your email app addressed to {SITE.supportEmail}.
        </p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-[#1F2A44]">
              Your name
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ramesh Kumar"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-[#1F2A44] focus:border-[#2E6B4F] focus:outline-none focus:ring-2 focus:ring-[#2E6B4F]/20"
            />
          </div>

          <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium text-[#1F2A44]">
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-[#1F2A44] focus:border-[#2E6B4F] focus:outline-none focus:ring-2 focus:ring-[#2E6B4F]/20"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-[#1F2A44]">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help?"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-[#1F2A44] focus:border-[#2E6B4F] focus:outline-none focus:ring-2 focus:ring-[#2E6B4F]/20"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#2E6B4F] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#24563F]"
          >
            Open email app
          </button>
        </form>
      </section>
    </LegalLayout>
  );
};

export default Contact;
