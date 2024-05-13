import React from 'react';
import './style/Footer.css'; // Path to your CSS file for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        © 2024 Sid Nair | Made with React |
        <a href="https://github.com/K00lA1D/personalwebsite" target="_blank" rel="noopener noreferrer" className="footer-link">
          Source Code
        </a>
      </div>
    </footer>
  );
};

export default Footer;