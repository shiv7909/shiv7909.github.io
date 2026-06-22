import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '80px 60px', background: 'var(--gray-50)', minHeight: 'calc(100vh - 68px)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--white)', padding: '60px', borderRadius: 'var(--radius-xl)', border: '1px solid var(--gray-200)', boxShadow: 'var(--card-shadow)' }}>
          <div className="section-eyebrow" style={{ marginBottom: '12px' }}>Legal</div>
          <h1 className="section-headline" style={{ marginBottom: '16px' }}>Privacy Policy</h1>
          <p className="section-sub" style={{ marginBottom: '40px' }}>Effective Date: {new Date().toLocaleDateString()}</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            <section>
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '14px', color: 'var(--navy)' }}>1. Information We Collect</h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.7, marginBottom: '12px', fontSize: '15px' }}>
                To provide a seamless property journey, we collect the following data:
              </p>
              <ul style={{ color: 'var(--gray-500)', lineHeight: 1.7, paddingLeft: '20px', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Identity & Contact Data:</strong> Phone numbers utilized for OTP logins, full names, and preferred languages.</li>
                <li><strong>Location Data:</strong> User preferences for specific localities and geographic coordinates (stored via PostGIS) for property searches.</li>
                <li><strong>Property & Media Data:</strong> Property descriptions, pricing, and uploaded media files, which are processed and stored securely using Cloudflare R2.</li>
                <li><strong>Transaction Data:</strong> Payment statuses, subscription tiers, and commission transaction records processed through Razorpay.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '14px', color: 'var(--navy)' }}>2. How We Use Your Information</h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.7, marginBottom: '12px', fontSize: '15px' }}>
                We use your data to power the core functionalities of the application:
              </p>
              <ul style={{ color: 'var(--gray-500)', lineHeight: 1.7, paddingLeft: '20px', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>To seamlessly connect property buyers and renters with active listings.</li>
                <li>To route inquiries directly to property listers via phone calls or automated WhatsApp lead auto-forwards.</li>
                <li>To manage post-purchase workflows, such as activating the Build vertical card for users who have recently purchased plots.</li>
                <li>To dispatch necessary notifications and communications utilizing Brevo.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '14px', color: 'var(--navy)' }}>3. Information Sharing and Disclosure</h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.7, marginBottom: '12px', fontSize: '15px' }}>
                We do not sell your personal data. Information is shared strictly to facilitate real estate transactions:
              </p>
              <ul style={{ color: 'var(--gray-500)', lineHeight: 1.7, paddingLeft: '20px', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Brokers and Sellers:</strong> Buyer inquiries and contact information are shared with the respective property listers or subscribed brokers to close deals.</li>
                <li><strong>Verified Builders:</strong> If you engage with the Build vertical, your quote requests and necessary contact details are shared with verified contractors and interior designers.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '14px', color: 'var(--navy)' }}>4. Data Security</h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.7, marginBottom: '12px', fontSize: '15px' }}>
                Propden employs enterprise-grade architecture to protect your data:
              </p>
              <ul style={{ color: 'var(--gray-500)', lineHeight: 1.7, paddingLeft: '20px', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Our core database utilizes Supabase Postgres, heavily protected by strict Row Level Security (RLS) policies to ensure users can only access appropriate data.</li>
                <li>For instance, active listings are publicly readable, while listers maintain exclusive management rights over their own property data.</li>
                <li>Client applications interact with the database exclusively through Remote Procedure Calls (RPC functions) to prevent unauthorized direct table queries.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '14px', color: 'var(--navy)' }}>5. Your Privacy Rights</h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.7, fontSize: '15px' }}>
                Depending on your jurisdiction, you have the right to request access to your data, correct inaccuracies within your profile, or request the deletion of your account and associated saved listings.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
