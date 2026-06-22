import React from 'react';

const DreamBuilding = () => {
  return (
    <section className="build-section">
      <div className="build-left">
        <div className="build-eyebrow">Build Vertical</div>
        <h2 className="build-headline">Build your<br/>dream place</h2>
        <p className="build-sub">Already own a plot? Connect with our verified builders, interior designers, and furniture sellers. Every partner is personally vetted by us.</p>

        <div className="build-services">
          <div className="build-service">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
            </div>
            <div>
              <div className="service-label">Verified Builders</div>
              <div className="service-sub">Licensed contractors who build homes in your corridor</div>
            </div>
            <div className="service-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          </div>
          <div className="build-service">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div>
              <div className="service-label">Interior Designers</div>
              <div className="service-sub">Portfolio-verified designers for every budget</div>
            </div>
            <div className="service-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          </div>
          <div className="build-service">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
            </div>
            <div>
              <div className="service-label">Furniture &amp; Materials</div>
              <div className="service-sub">Local sellers with transparent pricing</div>
            </div>
            <div className="service-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="build-right">
        <div className="build-cta-card">
          <div className="build-cta-title">Get a free consultation</div>
          <p className="build-cta-sub">Tell us about your plot and we'll match you with the right builder or designer today.</p>
          <input className="build-input" type="text" placeholder="Your name" />
          <input className="build-input" type="tel" placeholder="WhatsApp number" />
          <input className="build-input" type="text" placeholder="Plot locality (e.g. Shadnagar)" />
          <button className="build-submit">Get Matched Now</button>
          <div className="build-partners">
            <div className="partner-avatar" style={{background: '#2E6B4F'}}>RK</div>
            <div className="partner-avatar" style={{background: '#3B5BDB'}}>SV</div>
            <div className="partner-avatar" style={{background: '#1F2A44'}}>AP</div>
            <div className="partner-text">12 verified builders ready to take your call</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamBuilding;
