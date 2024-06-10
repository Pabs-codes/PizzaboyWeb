import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Pizzaboy</h2>
        <ul>
          <li>App</li>
          <li>Story</li>
          <li>Filialen</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Qualität</h2>
        <ul>
          <li>Bonuspunkte</li>
          <li>Produktinfos</li>
          <li>Öffnungszeiten</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Kontakt</h2>
        <ul>
          <li>Filialen</li>
          <li>Feedback</li>
          <li>Newsletter</li>
          <li>Registrierung</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Karriere</h2>
        <ul>
          <li>Jobs</li>
          <li>Partner</li>
          <li>Franchise</li>
          <li>Info</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Social Media</h2>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Rechtliches</h2>
        <ul>
          <li>AGB</li>
          <li>Datenschutz</li>
          <li>Impressum</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
