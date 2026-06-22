import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <span className="logo-dot"></span>
        Propden
      </Link>

      <nav>
        <a href="#" className="active">Buy</a>
        <a href="#">Rent</a>
        <a href="#">Sell</a>
        <a href="#" className="build-link">
          Build
          <span class="build-badge">NEW</span>
        </a>
      </nav>

      <div className="header-actions">
        <button className="btn-ghost">Login</button>
        <button className="btn-primary">List Property</button>
      </div>
    </header>
  );
};

export default Navbar;
