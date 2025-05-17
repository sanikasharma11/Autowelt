// Footer.js
import React from 'react';
import '../style/Footer.css';  // Create a separate CSS file for footer styles if necessary

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Autowelt. All rights reserved.</p>
        <div className="footer-links">
          
          <a href="/contact">Contact</a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
