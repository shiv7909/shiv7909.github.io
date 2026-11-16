import { Link } from 'react-router-dom';
import LegalLayout from '../components/LegalLayout';
import PageMeta from '../components/PageMeta';
import { SITE } from '../constants/site';

const Terms = () => {
  return (
    <LegalLayout
      eyebrow="Terms"
      title="Propden Terms of Service"
      subtitle={`Effective date: ${SITE.effectiveDate}`}
    >
      <PageMeta
        title="Propden Terms of Service — Propden"
        description="Terms of Service for the Propden Android app and propden.in, operated by Jakkula Shiva Kumar."
        path="/terms"
      />

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">1. Agreement</h2>
        <p className="mt-2">
          By using Propden you agree to these terms. Operated by{' '}
          <strong>{SITE.legalName}</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">2. The service</h2>
        <p className="mt-2">
          Software to manage PG/hostel rooms, tenants, rent records, deposits and
          complaints. Propden is a record-keeping tool;{' '}
          <strong>
            it does not collect rent from tenants or hold money
          </strong>{' '}
          on behalf of owners.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">3. Accounts</h2>
        <p className="mt-2">
          18+ only; accurate information; keep your email secure; you are responsible for
          activity on your account and for the staff you invite.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">4. Owner&apos;s responsibilities</h2>
        <p className="mt-2">
          You are responsible for the tenant data you enter: you must have a lawful
          reason, inform tenants, and obtain any consent required (including for ID
          documents and photos). Don&apos;t upload data you&apos;re not allowed to. Store
          only the last 4 digits of Aadhaar.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">5. Subscriptions</h2>
        <p className="mt-2">
          One subscription per hostel. 14-day free trial for new hostels (no card needed).
          Plans: monthly, 3, 6 and 12 months, auto-renewing or prepaid, sold through
          Google Play at the prices shown there. Auto-renewing plans renew until
          cancelled in Google Play. Prepaid plans end at the end of the period unless
          renewed. Each plan covers up to 400 active tenants.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">6. Ending or lapsed plans</h2>
        <p className="mt-2">
          If a plan lapses, the hostel becomes <strong>read-only</strong>; data is not
          deleted.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">7. Refunds</h2>
        <p className="mt-2">
          Handled under Google Play&apos;s refund policy; see{' '}
          <Link to="/refund" className="font-medium text-[#2E6B4F] underline">
            /refund
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">8. Acceptable use</h2>
        <p className="mt-2">
          No illegal use, no harassment, no uploading malware, no trying to access other
          users&apos; data, no reverse-engineering or overloading the service, no
          reselling.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">9. Your data</h2>
        <p className="mt-2">
          You own your data. You give us permission to store and process it only to
          provide the service. See the{' '}
          <Link to="/privacy" className="font-medium text-[#2E6B4F] underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">10. Availability</h2>
        <p className="mt-2">
          We aim for reliable service but don&apos;t guarantee it will be uninterrupted.
          Features may change.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">
          11. Disclaimer and limitation of liability
        </h2>
        <p className="mt-2">
          Service provided &ldquo;as is&rdquo;. We aren&apos;t liable for rent disputes,
          tenant issues, or indirect losses. Total liability limited to the amount you
          paid us in the last 3 months.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">12. Termination</h2>
        <p className="mt-2">
          You can stop anytime and delete your account. We may suspend accounts that break
          these terms.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">13. Governing law</h2>
        <p className="mt-2">
          Laws of India; courts at {SITE.governingCity}.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">14. Changes</h2>
        <p className="mt-2">
          We may update the terms; continued use means acceptance.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">15. Contact</h2>
        <p className="mt-2">
          <a
            href={`mailto:${SITE.supportEmail}`}
            className="font-medium text-[#2E6B4F] underline"
          >
            {SITE.supportEmail}
          </a>{' '}
          · {SITE.address}
        </p>
      </section>
    </LegalLayout>
  );
};

export default Terms;
