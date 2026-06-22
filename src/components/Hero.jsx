import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          Hyderabad's transparent property platform
        </div>

        <h1 className="hero-headline">
          Buy, rent or sell<br/>your property <em>honestly</em>
        </h1>

        <p className="hero-sub">
          No hidden brokerage. No surprise cuts. Find verified plots, flats, houses &amp; commercial spaces across Shadnagar, Farooqnagar and Hyderabad.
        </p>

        <div className="hero-stats">
          <div>
            <div className="stat-val">1,200+</div>
            <div className="stat-label">Active Listings</div>
          </div>
          <div>
            <div className="stat-val">340+</div>
            <div className="stat-label">Verified Properties</div>
          </div>
          <div>
            <div className="stat-val">₹0</div>
            <div className="stat-label">Hidden Fees</div>
          </div>
        </div>

        {/* Search box */}
        <div className="search-box">
          <div className="search-tabs">
            <button className="search-tab active">Buy</button>
            <button className="search-tab">Rent</button>
            <button className="search-tab">Sell</button>
          </div>
          <div className="search-fields">
            <div className="search-field">
              <div className="field-label">Locality</div>
              <input className="field-input" type="text" placeholder="Shadnagar, Farooqnagar…" />
            </div>
            <div className="search-field">
              <div className="field-label">Property Type</div>
              <input className="field-input" type="text" placeholder="Plot, Flat, House…" />
            </div>
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>

      {/* MAP SIDE */}
      <div className="hero-right">
        <div className="map-bg"></div>

        {/* Road strips */}
        <div className="map-road-h" style={{top: '42%'}}></div>
        <div className="map-road-h" style={{top: '65%'}}></div>
        <div className="map-road-v" style={{left: '38%'}}></div>
        <div className="map-road-v" style={{left: '68%'}}></div>

        {/* City blocks */}
        <div className="map-block" style={{top: '14%', left: '12%', width: '22%', height: '24%'}}></div>
        <div className="map-block" style={{top: '14%', left: '42%', width: '18%', height: '24%'}}></div>
        <div className="map-block" style={{top: '50%', left: '12%', width: '20%', height: '12%'}}></div>
        <div className="map-block" style={{top: '70%', left: '42%', width: '22%', height: '16%'}}></div>
        <div className="map-block" style={{top: '14%', left: '72%', width: '18%', height: '20%'}}></div>

        {/* Pins */}
        <div className="map-pin" style={{top: '27%', left: '55%'}}></div>
        <div className="map-pin map-pin-2" style={{top: '55%', left: '34%'}}></div>

        {/* Main property card */}
        <div className="prop-card" style={{top: '10%', left: '50%', transform: 'translateX(-50%)'}}>
          <div className="prop-card-img">
            <div className="prop-card-img-placeholder">
              <svg className="house-svg" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="45" width="90" height="45" rx="2" fill="#8CA5C0"/>
                <polygon points="10,45 60,10 110,45" fill="#6B8DAE"/>
                <rect x="48" y="62" width="24" height="28" rx="2" fill="#5A7B9C"/>
                <rect x="20" y="55" width="18" height="14" rx="1" fill="#7DA3BF"/>
                <rect x="82" y="55" width="18" height="14" rx="1" fill="#7DA3BF"/>
              </svg>
            </div>
            <span className="prop-badge badge-verified">✓ Verified</span>
          </div>
          <div className="prop-card-body">
            <div className="prop-price">₹52,00,000</div>
            <div className="prop-name">Sai Nagar Plot</div>
            <div className="prop-addr">Shadnagar, Near NH-44, Hyderabad</div>
            <div className="prop-meta">
              <div className="prop-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                200 sq.yd
              </div>
              <div className="prop-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                Plot
              </div>
            </div>
          </div>
        </div>

        {/* Secondary floating card */}
        <div className="prop-card-sm" style={{bottom: '22%', right: '5%'}}>
          <div className="prop-card-sm-img">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="4" y="18" width="28" height="14" rx="1" fill="#5A8A65"/>
              <polygon points="2,18 18,6 34,18" fill="#3D6E4A"/>
              <rect x="13" y="24" width="10" height="8" rx="1" fill="#2E5738"/>
            </svg>
          </div>
          <div className="prop-card-sm-body">
            <div className="prop-sm-price">₹38L <span>/sqyd</span></div>
            <div className="prop-sm-name">Green Valley</div>
            <div className="prop-sm-addr">Farooqnagar, Hyd</div>
          </div>
        </div>

        {/* Floating availability badge */}
        <div style={{position: 'absolute', bottom: '8%', left: '5%', background: 'white', borderRadius: 'var(--radius-md)', padding: '10px 14px', boxShadow: 'var(--card-shadow)', display: 'flex', alignItems: 'center', gap: '10px'}}>
          <div style={{width: '10px', height: '10px', background: '#22C55E', borderRadius: '50%', flexShrink: 0}}></div>
          <div>
            <div style={{fontSize: '12px', fontWeight: 700, color: 'var(--navy)'}}>12 new listings today</div>
            <div style={{fontSize: '11px', color: 'var(--gray-400)'}}>Shadnagar corridor</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
