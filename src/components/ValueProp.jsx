import React from 'react';

const ValueProp = () => {
  return (
    <section className="section transparency">
      <div className="transparency-inner">
        <div className="transparency-header">
          <div className="section-eyebrow">How we work</div>
          <h2 className="section-headline">Radical Transparency in Real Estate</h2>
          <p className="section-sub">We believe you should know exactly what you're paying for. Zero hidden cuts, no platform commissions, full disclosure on every listing.</p>
        </div>

        <div className="trust-cards">
          {/* Card 1 */}
          <div className="trust-card">
            <div className="trust-icon icon-green">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E6B4F" strokeWidth="2.2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <path d="M9 22V12h6v10"/>
              </svg>
            </div>
            <h3>Direct from Owner</h3>
            <span className="trust-pill pill-green">₹0 Brokerage</span>
            <p>Connect straight with the property owner. What you see is what you pay. Propden never charges platform fees or commissions on owner-listed properties. Absolute zero brokerage.</p>
          </div>

          {/* Card 2 */}
          <div className="trust-card">
            <div className="trust-icon icon-blue">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2.2">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
                <line x1="12" y1="12" x2="12" y2="16"/>
              </svg>
            </div>
            <h3>Agent Premium Listings</h3>
            <span className="trust-pill pill-blue">Upfront Disclosure</span>
            <p>Professional agents may charge standard local brokerage — always displayed upfront on every listing before you make contact. Propden takes absolutely no cut from agent transactions.</p>
          </div>

          {/* Card 3 */}
          <div className="trust-card">
            <div className="trust-icon icon-navy">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" strokeWidth="2.2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <h3>Propden Verified</h3>
            <span className="trust-pill pill-navy">1.5% Commission</span>
            <p>We handle the sale for you — marketing, calls, and closing. A flat 1.5% commission is disclosed before you list. No hidden charges at any step. We work for you, not the buyer.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
