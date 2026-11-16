import LegalLayout from '../components/LegalLayout';
import PageMeta from '../components/PageMeta';
import { SITE } from '../constants/site';

const DeleteAccount = () => {
  const deleteMailto = `mailto:${SITE.supportEmail}?subject=${encodeURIComponent(
    'Delete my Propden account'
  )}`;

  return (
    <LegalLayout
      eyebrow="Data Deletion"
      title="Delete your Propden account and data"
      subtitle={`Operated by ${SITE.legalName} · Package: ${SITE.packageName}`}
    >
      <PageMeta
        title="Delete your Propden account and data — Propden"
        description="How to delete your Propden account and data in the app or without the app."
        path="/delete-account"
      />

      <p>
        You can delete your <strong>Propden</strong> account (operated by{' '}
        <strong>{SITE.legalName}</strong>) either inside the Android app or without the
        app using the email request below.
      </p>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">1. Delete from the app</h2>
        <p className="mt-2">
          Open Propden → <strong>Profile → Delete account</strong> → confirm.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">2. Delete without the app</h2>
        <p className="mt-2">
          Send an email from your registered email address to{' '}
          <a
            href={deleteMailto}
            className="font-medium text-[#2E6B4F] underline"
          >
            {SITE.supportEmail}
          </a>{' '}
          with the subject <strong>&ldquo;Delete my Propden account&rdquo;</strong>.
          We&apos;ll confirm and process it.
        </p>
        <div className="mt-4">
          <a
            href={deleteMailto}
            className="inline-flex items-center rounded-lg bg-[#1F2A44] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2a3a5c]"
          >
            Email to request account deletion
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">3. Before you delete</h2>
        <p className="mt-2">
          Cancel any active Google Play subscription first (Google Play → Payments &amp;
          subscriptions → Subscriptions → Propden → Cancel). Deleting the account
          doesn&apos;t cancel the Google Play subscription automatically.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">4. What gets deleted</h2>
        <p className="mt-2">
          Your account; your business; all hostels; buildings, rooms and beds; all tenant
          records, documents and photos; payments, dues, deposits and receipts;
          complaints; staff access; notification tokens.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">5. What&apos;s kept</h2>
        <p className="mt-2">
          Purchase records that Google Play keeps under its own policy; records we must
          keep by law (if any).
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">6. Timing</h2>
        <p className="mt-2">
          A <strong>30-day grace period</strong> (you can cancel the deletion by signing
          in and choosing &ldquo;Cancel deletion&rdquo;), then permanent deletion.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">7. Staff members</h2>
        <p className="mt-2">
          Deleting a staff account removes only that person&apos;s access; the
          owner&apos;s hostel data stays.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-[#1F2A44]">8. Tenants</h2>
        <p className="mt-2">
          Contact the hostel owner to remove your details, or email{' '}
          <a
            href={`mailto:${SITE.supportEmail}`}
            className="font-medium text-[#2E6B4F] underline"
          >
            {SITE.supportEmail}
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
};

export default DeleteAccount;
