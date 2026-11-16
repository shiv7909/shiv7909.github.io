import { Link } from 'react-router-dom';
import LegalLayout from '../components/LegalLayout';
import PageMeta from '../components/PageMeta';
import { SITE } from '../constants/site';

const Refund = () => {
  return (
    <LegalLayout
      eyebrow="Billing & Refunds"
      title="Subscription, Cancellation & Refund Policy"
      subtitle={`Effective date: ${SITE.effectiveDate}`}
    >
      <PageMeta
        title="Subscription, Cancellation & Refund Policy — Propden"
        description="How Propden subscriptions, 14-day free trials, cancellations and Google Play refunds work."
        path="/refund"
      />

      <ul className="list-disc space-y-4 pl-5">
        <li>
          <strong>Payment processing:</strong> Payments are processed by{' '}
          <strong>Google Play</strong>. We don&apos;t see or store card or UPI details.
        </li>
        <li>
          <strong>Free trial:</strong> 14 days for each new hostel, no card needed.
        </li>
        <li>
          <strong>How to cancel:</strong> Google Play app → profile icon →{' '}
          <strong>
            Payments &amp; subscriptions → Subscriptions → Propden → Cancel subscription
          </strong>
          . You keep access until the end of the paid period.
        </li>
        <li>
          <strong>Prepaid plans:</strong> Prepaid plans don&apos;t renew automatically.
        </li>
        <li>
          <strong>Refunds:</strong> Refunds follow Google Play&apos;s refund policy. You
          can request a refund through Google Play (play.google.com → Order history /
          &ldquo;Request a refund&rdquo;). For problems, email{' '}
          <a
            href={`mailto:${SITE.supportEmail}`}
            className="font-medium text-[#2E6B4F] underline"
          >
            {SITE.supportEmail}
          </a>{' '}
          with your order ID and we&apos;ll help.
        </li>
        <li>
          <strong>Price changes:</strong> Price changes are announced in advance through
          Google Play.
        </li>
        <li>
          <strong>After cancellation:</strong> Your hostel becomes read-only; data is kept
          until you{' '}
          <Link to="/delete-account" className="font-medium text-[#2E6B4F] underline">
            delete your account
          </Link>
          .
        </li>
      </ul>
    </LegalLayout>
  );
};

export default Refund;
