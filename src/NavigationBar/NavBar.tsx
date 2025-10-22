import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import logo from '../resources/navbar-logo.png';

const NavBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Show navbar when at the top
          if (currentScrollY < 10) {
            setIsVisible(true);
          }
          // Hide when scrolling down
          else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setIsVisible(false);
          }
          // Show when scrolling up
          else if (currentScrollY < lastScrollY.current) {
            setIsVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="PC Building Guide Logo" className="logo-image" />
          <span className="logo-text">PC Building Guide</span>
        </div>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#prices" onClick={(e) => { e.preventDefault(); scrollToSection('prices'); }}>
              Prices
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
              About Me
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
