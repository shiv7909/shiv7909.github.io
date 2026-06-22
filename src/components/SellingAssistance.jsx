import React from 'react';

const SellingAssistance = () => {
  return (
    <section className="section hiw">
      <div style={{textAlign: 'center', marginBottom: 0}}>
        <div className="section-eyebrow" style={{textAlign: 'center'}}>Simple Process</div>
        <h2 className="section-headline" style={{textAlign: 'center'}}>How Propden works</h2>
        <p className="section-sub" style={{textAlign: 'center', margin: '0 auto'}}>Three steps from searching to closing, with full transparency at each stage.</p>
      </div>
      <div className="hiw-steps">
        <div className="hiw-step">
          <div className="step-num">1</div>
          <div className="step-title">Search &amp; filter</div>
          <p className="step-desc">Browse by Buy or Rent, pick your property type, and filter by locality, budget, and area. All in one unified feed.</p>
        </div>
        <div className="hiw-step">
          <div className="step-num">2</div>
          <div className="step-title">See full transparency</div>
          <p className="step-desc">Every listing shows the listing mode — owner direct, broker, or Propden Verified — and exactly what (if anything) you'll pay before you call.</p>
        </div>
        <div className="hiw-step">
          <div className="step-num">3</div>
          <div className="step-title">Connect &amp; close</div>
          <p className="step-desc">Call or WhatsApp directly from the listing. No forms, no middlemen, no surprise charges. What you see is what you pay.</p>
        </div>
      </div>
    </section>
  );
};

export default SellingAssistance;
