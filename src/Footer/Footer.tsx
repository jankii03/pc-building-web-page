import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>PC Building Guide</h3>
          <p>Your trusted resource for building the perfect PC</p>
        </div>

        {/* <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#guides">Build Guides</a></li>
            <li><a href="#components">Components</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div> */}

        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#discord">Discord</a></li>
            <li><a href="#youtube">YouTube</a></li>
            <li><a href="#github">GitHub</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © {currentYear} PC Building Guide. All rights reserved. Created by Januel E. Torres Marquez.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
