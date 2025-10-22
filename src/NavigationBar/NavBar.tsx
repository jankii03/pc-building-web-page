import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="NovaLine PC's Logo" className="logo-image" />
          <span className="logo-text">NovaLine PC's</span>
        </div>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/prices">
              Prices
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about-me">
              About Me
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
