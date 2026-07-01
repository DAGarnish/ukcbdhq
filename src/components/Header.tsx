'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="logo-link" onClick={closeMenu}>
          <span className="logo-text">UKCBDHQ</span>
        </a>

        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#why-spain" className="nav-link">Why Spain</a></li>
            <li><a href="#products" className="nav-link">Products</a></li>
            <li><a href="#why-topicals" className="nav-link">Why Topicals</a></li>
            <li><a href="#labs" className="nav-link">Labs</a></li>
            <li><a href="#compliance" className="nav-link">Compliance</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#waitlist" className="btn btn-primary" style={{ display: 'none', padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}>
            Join Waitlist
          </a>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li><a href="#about" className="mobile-nav-link" onClick={closeMenu}>About</a></li>
          <li><a href="#why-spain" className="mobile-nav-link" onClick={closeMenu}>Why Spain</a></li>
          <li><a href="#products" className="mobile-nav-link" onClick={closeMenu}>Products</a></li>
          <li><a href="#why-topicals" className="mobile-nav-link" onClick={closeMenu}>Why Topicals</a></li>
          <li><a href="#labs" className="mobile-nav-link" onClick={closeMenu}>Labs</a></li>
          <li><a href="#compliance" className="mobile-nav-link" onClick={closeMenu}>Compliance</a></li>
        </ul>
        <a 
          href="#waitlist" 
          className="btn btn-primary" 
          style={{ width: '100%', marginTop: 'auto', padding: '1.2rem' }}
          onClick={closeMenu}
        >
          Join Waitlist
        </a>
      </div>
    </header>
  );
}
