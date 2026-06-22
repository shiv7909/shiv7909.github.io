import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo"><span className="logo-dot"></span>Propden</div>
          <p className="footer-tagline">The transparent way to buy, rent, sell and build property in Hyderabad.</p>
        </div>
        <div className="footer-col">
          <h4>Buy</h4>
          <ul>
            <li><a href="#">Plots in Shadnagar</a></li>
            <li><a href="#">Flats in Farooqnagar</a></li>
            <li><a href="#">Houses in Hyderabad</a></li>
            <li><a href="#">Commercial Spaces</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Rent</h4>
          <ul>
            <li><a href="#">Flats for Rent</a></li>
            <li><a href="#">Houses for Rent</a></li>
            <li><a href="#">Commercial for Rent</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Build</h4>
          <ul>
            <li><a href="#">Find a Builder</a></li>
            <li><a href="#">Interior Designers</a></li>
            <li><a href="#">Furniture Sellers</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">How It Works</Link></li>
            <li><Link to="/terms">Terms &amp; Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-col" style={{ flex: '0 0 240px' }}>
          <h4>Contact</h4>
          <ul style={{ gap: '16px' }}>
            <li style={{ fontSize: '13px', lineHeight: '1.6' }}>
              <strong style={{ color: 'white', fontWeight: 600 }}>Address</strong><br />
              Shadnagar, Ranga Reddy District,<br />
              Telangana State, India - 509216
            </li>
            <li style={{ fontSize: '13px', lineHeight: '1.6' }}>
              <strong style={{ color: 'white', fontWeight: 600 }}>Support</strong><br />
              New: <a href="mailto:hello@propden.in">hello@propden.in</a><br />
              Existing: <a href="mailto:support@propden.in">support@propden.in</a>
            </li>
            <li style={{ fontSize: '13px', lineHeight: '1.6' }}>
              <strong style={{ color: 'white', fontWeight: 600 }}>Projects &amp; Partnerships</strong><br />
              Projects: <a href="mailto:projects@propden.in">projects@propden.in</a><br />
              Founder: <a href="mailto:shiva@propden.in">shiva@propden.in</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Propden. All rights reserved.</p>
        <button className="lang-pill">🌐 English / తెలుగు / हिन्दी</button>
      </div>
    </footer>
  );
};

export default Footer;
