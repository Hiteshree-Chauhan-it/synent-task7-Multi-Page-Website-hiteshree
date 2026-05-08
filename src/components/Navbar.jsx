import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
 
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <span className="logo-bracket">&lt;</span>
        C++Play
        <span className="logo-bracket">/&gt;</span>
      </Link>

      {/* Hamburger icon for mobile */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
        <li>
          <Link
            to="/"
            className={isActive('/') ? 'active' : ''}
            onClick={closeMenu}
          >
            🏠 Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={isActive('/about') ? 'active' : ''}
            onClick={closeMenu}
          >
            📖 About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={isActive('/services') ? 'active' : ''}
            onClick={closeMenu}
          >
            🎮 Play
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={isActive('/contact') ? 'active' : ''}
            onClick={closeMenu}
          >
            ✉️ Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;