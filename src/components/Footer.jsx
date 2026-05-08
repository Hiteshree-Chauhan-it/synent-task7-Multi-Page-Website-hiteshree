import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* Brand */}
      <div className="footer-brand">
        <span className="footer-logo">
          <span className="logo-bracket">&lt;</span>
          C++Play
          <span className="logo-bracket">/&gt;</span>
        </span>
        <p className="footer-tagline">Learn C++ the fun way 🎮</p>
      </div>

      {/* Quick Links */}
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Play</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Topics */}
      <div className="footer-topics">
        <h4>C++ Topics</h4>
        <ul>
          <li>Variables</li>
          <li>Loops</li>
          <li>Arrays</li>
          <li>Functions</li>
          <li>Pointers</li>
        </ul>
      </div>

      {/* Copyright — full width bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ClashCode — Made with ❤️ for learners everywhere</p>
      </div>
    </footer>
  );
}

export default Footer;