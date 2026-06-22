import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '80px 60px', background: 'var(--gray-50)', minHeight: 'calc(100vh - 68px)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--white)', padding: '60px', borderRadius: 'var(--radius-xl)', border: '1px solid var(--gray-200)', boxShadow: 'var(--card-shadow)' }}>
          <div className="section-eyebrow" style={{ marginBottom: '12px' }}>Legal</div>
          <h1 className="section-headline" style={{ marginBottom: '16px' }}>Terms & Conditions</h1>
          <p className="section-sub" style={{ marginBottom: '40px' }}>Effective Date: {new Date().toLocaleDateString()}</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            <section>
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '14px', color: 'var(--navy)' }}>1. Introduction</h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.7, fontSize: '15px' }}>
                Welcome to Propden. These Terms and Conditions govern your access to and use of the Propden mobile application and associated services. Propden operates as a unified platform covering the entire property lifecycle, including renting, buying, selling, and building. By accessing the platform using our OTP-only authentication, you agree to be bound by these terms.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '14px', color: 'var(--navy)' }}>2. Scope of Services</h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.7, fontSize: '15px' }}>
                Propden provides a singular platform where users can search across plots, flats, independent houses, and commercial spaces.
                <br /><br />
                <strong style={{ color: 'var(--navy)' }}>Property Listings:</strong> We facilitate property discovery through self-listed properties, broker-listed properties, and Propden-managed sales.
                <br /><br />
                <strong style={{ color: 'var(--navy)' }}>Propden Verified Managed Sales:</strong> Users may opt for our managed service where our team handles the listing, verification, and direct sales process.
                <br /><br />
                <strong style={{ color: 'var(--navy)' }}>Build Vertical:</strong> Once activated, the platform connects verified plot buyers with contractors, interior designers, and furniture sellers.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '14px', color: 'var(--navy)' }}>3. Account Registration & User Obligations</h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.7, fontSize: '15px' }}>
                Users must register using a valid phone number via our OTP-only login system. Users may select their preferred interface language, including Telugu, Hindi, or English. Individual owners listing their own property are granted up to 2 active listings free of charge.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '14px', color: 'var(--navy)' }}>4. Broker Subscriptions & Commercial Accounts</h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.7, fontSize: '15px' }}>
                Brokers acting on behalf of clients must subscribe to a tiered monthly plan to maintain active listings. Available tiers range from a free basic tier up to the Elite plan priced at ₹1,00,000 per month, which offers unlimited listings and dedicated agency storefronts. Subscription payments are processed securely via Razorpay.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '14px', color: 'var(--navy)' }}>5. Fees, Commissions, and Payments</h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.7, fontSize: '15px' }}>
                <strong style={{ color: 'var(--navy)' }}>Managed Sales:</strong> For properties utilizing the Propden Verified managed sale service, Propden charges a 1.5% commission on the final closing sale price.<br /><br />
                <strong style={{ color: 'var(--navy)' }}>Build Referrals:</strong> Propden earns an 8% referral fee on the total project value from builders, designers, or furniture sellers once a quote request converts into a signed job.<br /><br />
                All commission transactions and base amounts are calculated and recorded systematically upon the successful conversion of leads.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '14px', color: 'var(--navy)' }}>6. Limitation of Liability</h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.7, fontSize: '15px' }}>
                Propden acts primarily as a technology facilitator. While we enforce a "Propden Verified" standard for managed sales, we do not guarantee the structural integrity, legal title, or financial compliance of self-listed or broker-listed properties. Any agreements made directly between buyers, sellers, brokers, and builders are the sole responsibility of the contracting parties.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '14px', color: 'var(--navy)' }}>7. Governing Law</h2>
              <p style={{ color: 'var(--gray-500)', lineHeight: 1.7, fontSize: '15px' }}>
                These terms are governed by the laws of India. Any disputes arising from the use of Propden shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
