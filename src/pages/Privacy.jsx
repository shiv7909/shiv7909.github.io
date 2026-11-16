import { Link } from 'react-router-dom';
import LegalLayout from '../components/LegalLayout';
import PageMeta from '../components/PageMeta';
import { SITE } from '../constants/site';

const TableWrap = ({ children }) => (
  <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
    <table className="w-full border-collapse text-left text-sm">{children}</table>
  </div>
);

const Privacy = () => {
  return (
    <LegalLayout
      eyebrow="Privacy"
      title="Propden Privacy Policy"
      subtitle={`Effective date: ${SITE.effectiveDate} · Last updated: ${SITE.lastUpdated}`}
    >
      <PageMeta
        title="Propden Privacy Policy — Propden"
        description="Privacy Policy for the Propden Android app and propden.in, operated by Jakkula Shiva Kumar."
        path="/privacy"
      />

      <section>
        <h2 className="text-xl font-bold text-[#1F2A44]">4.1 Who we are</h2>
        <p className="mt-2">
          Propden is a mobile app operated by <strong>{SITE.legalName}</strong>,{' '}
          {SITE.address} (&ldquo;we&rdquo;, &ldquo;us&rdquo;). Contact:{' '}
          <a
            href={`mailto:${SITE.privacyEmail}`}
            className="font-medium text-[#2E6B4F] underline"
          >
            {SITE.privacyEmail}
          </a>
          . The policy applies to the Propden Android app (package{' '}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">
            {SITE.packageName}
          </code>
          ) and propden.in.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#1F2A44]">4.2 Who uses Propden</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong>Owners, managers and staff</strong> of PGs and hostels use the app.
            They create an account.
          </li>
          <li>
            <strong>Tenants (members)</strong> do not use the app. Their information is
            entered by the hostel owner or staff.
          </li>
          <li>
            <strong>Roles:</strong> for tenant data, the <strong>hostel owner</strong>{' '}
            decides what is collected and why (the owner is the &ldquo;data
            fiduciary&rdquo; under India&apos;s Digital Personal Data Protection Act,
            2023). <strong>Propden processes that data on the owner&apos;s behalf</strong>{' '}
            to provide the service. Owners are responsible for informing their tenants and
            getting any consent required by law before adding their details.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#1F2A44]">4.3 Data we collect</h2>

        <h3 className="mt-4 text-base font-bold text-[#1F2A44]">
          About account users (owners, managers, staff):
        </h3>
        <TableWrap>
          <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-600">
            <tr>
              <th className="border-b border-gray-200 px-4 py-3">Data</th>
              <th className="border-b border-gray-200 px-4 py-3">Why</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">Email address</td>
              <td className="px-4 py-3">Login (one-time code), account emails</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">Name</td>
              <td className="px-4 py-3">Shown in the app and on receipts</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">Mobile number</td>
              <td className="px-4 py-3">Contact detail for the hostel</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Google account name, email and profile photo (only if you choose
                &ldquo;Continue with Google&rdquo;)
              </td>
              <td className="px-4 py-3">Login and profile</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Hostel details: name, area, address, city, state, pincode, hostel type
              </td>
              <td className="px-4 py-3">To set up and show your hostel</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Precise location (GPS) of the hostel, captured once during registration or
                when you choose to update it
              </td>
              <td className="px-4 py-3">
                To pin your hostel&apos;s location. We don&apos;t track your location in
                the background
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Device push-notification token, app version, platform
              </td>
              <td className="px-4 py-3">
                To send notifications about complaints and your account
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Subscription and purchase information from Google Play (purchase token,
                plan, status, expiry)
              </td>
              <td className="px-4 py-3">
                To activate and manage your subscription.{' '}
                <strong>We never receive your card, UPI or bank details</strong>; Google
                Play handles payment
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Actions in the app (audit log: who changed what and when)
              </td>
              <td className="px-4 py-3">
                Security and record-keeping for your hostel
              </td>
            </tr>
          </tbody>
        </TableWrap>

        <h3 className="mt-6 text-base font-bold text-[#1F2A44]">
          About tenants (entered by the hostel owner or staff):
        </h3>
        <TableWrap>
          <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-600">
            <tr>
              <th className="border-b border-gray-200 px-4 py-3">Data</th>
              <th className="border-b border-gray-200 px-4 py-3">Why</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Name, mobile number, alternate phone, email, gender, date of birth
              </td>
              <td className="px-4 py-3">Tenant records</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Occupation, institution / workplace, permanent address
              </td>
              <td className="px-4 py-3">Tenant records</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Emergency contact name, phone and relation
              </td>
              <td className="px-4 py-3">Safety</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Photo, and images of ID documents (Aadhaar front/back or other ID)
              </td>
              <td className="px-4 py-3">Identity verification by the hostel</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Only the last 4 digits of the Aadhaar number (the full number is never
                stored)
              </td>
              <td className="px-4 py-3">Identification</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Room/bed, joining date, rent, deposit, payments, dues, notice and vacate
                dates
              </td>
              <td className="px-4 py-3">Rent and stay management</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Complaints, comments and complaint photos
              </td>
              <td className="px-4 py-3">Maintenance</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Notes added by the owner
              </td>
              <td className="px-4 py-3">Hostel records</td>
            </tr>
          </tbody>
        </TableWrap>

        <p className="mt-4">
          <strong>Camera and photos:</strong> the app asks for camera / photo access only
          when you choose to add a tenant photo, an ID document or a complaint photo.
        </p>
        <p className="mt-2">
          <strong>Location:</strong> used only in the foreground, only when registering or
          updating the hostel&apos;s location.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#1F2A44]">4.4 How we use data</h2>
        <p className="mt-2">
          To provide the service (accounts, hostel records, rent tracking, receipts,
          complaints); to send login codes, welcome, invite and service emails; to send
          push notifications; to manage subscriptions; to keep the service secure and
          prevent misuse; to provide support; to comply with law.{' '}
          <strong>
            We do not sell personal data. We do not use it for advertising. We do not show
            ads.
          </strong>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#1F2A44]">
          4.5 Sharing and service providers
        </h2>
        <p className="mt-2">
          We share data only with service providers that run Propden for us, and only as
          needed:
        </p>
        <TableWrap>
          <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-600">
            <tr>
              <th className="border-b border-gray-200 px-4 py-3">Provider</th>
              <th className="border-b border-gray-200 px-4 py-3">Purpose</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Supabase (database, file storage, authentication)
              </td>
              <td className="px-4 py-3">Stores app data securely</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Brevo (Sendinblue)
              </td>
              <td className="px-4 py-3">Sends login codes and service emails</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Google Play Billing
              </td>
              <td className="px-4 py-3">Handles subscription payments</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">Google Sign-In</td>
              <td className="px-4 py-3">Optional login with Google</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Firebase Cloud Messaging (Google)
              </td>
              <td className="px-4 py-3">Push notifications</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-[#1F2A44]">
                Device map / geocoding service (Google, via the phone)
              </td>
              <td className="px-4 py-3">
                Turns the hostel&apos;s GPS location into an address suggestion
              </td>
            </tr>
          </tbody>
        </TableWrap>
        <p className="mt-4">
          Within a hostel, data is visible to the owner and the team members the owner
          invites. <strong>Staff cannot see tenants&apos; ID documents.</strong> Data may
          be disclosed if required by law or to protect rights and safety. Data may be
          stored or processed on servers outside India by these providers, with
          appropriate safeguards.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#1F2A44]">4.6 Security</h2>
        <p className="mt-2">
          Data is encrypted in transit (HTTPS). Each hostel&apos;s data is separated so
          other users cannot access it. Documents are stored in private storage and are
          only shown to authorised users through temporary links. Access is limited by
          role (owner, manager, staff). No method is 100% secure, but we take reasonable
          measures.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#1F2A44]">4.7 Retention</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>We keep data while your account is active.</li>
          <li>
            If your subscription ends, your data stays (read-only) until you delete your
            account.
          </li>
          <li>
            When you request account deletion, your account enters a{' '}
            <strong>30-day period</strong> during which you can cancel the deletion. After
            30 days, your account, your business, its hostels and all tenant records,
            payments, complaints and documents are <strong>permanently deleted</strong>.
          </li>
          <li>
            Some records may be kept longer only if the law requires it (for example,
            purchase records held by Google Play).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#1F2A44]">4.8 Your rights</h2>
        <p className="mt-2">
          You can access and correct your data in the app; request a copy (export) of
          your hostel data; withdraw consent; request deletion (see{' '}
          <Link to="/delete-account" className="font-medium text-[#2E6B4F] underline">
            /delete-account
          </Link>
          ); and raise a grievance. Tenants who want to access, correct or delete their
          data should contact their hostel owner first; they can also write to us at{' '}
          <a
            href={`mailto:${SITE.privacyEmail}`}
            className="font-medium text-[#2E6B4F] underline"
          >
            {SITE.privacyEmail}
          </a>{' '}
          and we will help or forward the request to the owner.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#1F2A44]">4.9 Children</h2>
        <p className="mt-2">
          Propden is meant for business use by adults (18+). Account users must be 18 or
          older. Hostel owners may enter information about tenants who are minors only with
          a parent or guardian&apos;s consent, as required by law.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#1F2A44]">4.10 Grievance officer</h2>
        <p className="mt-2">
          Name: {SITE.grievanceOfficer} · Email:{' '}
          <a
            href={`mailto:${SITE.privacyEmail}`}
            className="font-medium text-[#2E6B4F] underline"
          >
            {SITE.privacyEmail}
          </a>{' '}
          · Address: {SITE.address}. We will acknowledge complaints within 48 hours and
          try to resolve them within 30 days.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#1F2A44]">4.11 Changes</h2>
        <p className="mt-2">
          We will update this page and change the &ldquo;Last updated&rdquo; date; for
          important changes we will notify users in the app or by email.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#1F2A44]">4.12 Contact</h2>
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

export default Privacy;
