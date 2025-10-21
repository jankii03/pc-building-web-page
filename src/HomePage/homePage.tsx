import React from 'react';
import './homePage.css';

interface HomePageProps {
  className?: string;
}

const HomePage: React.FC<HomePageProps> = ({ className = '' }) => {
  return (
    <div className={`home-page ${className}`}>
      <header className="home-header">
        <h1>Welcome to PC Building Guide</h1>
        <p className="tagline">Build your dream PC with confidence</p>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2>Start Your Build Journey</h2>
          <p>
            Whether you're a first-time builder or an experienced enthusiast,
            we'll guide you through every step of building your perfect PC.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features-section">
        <h2>Why Build Your Own PC?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>💰 Better Value</h3>
            <p>Get more performance for your budget by choosing your own components</p>
          </div>
          <div className="feature-card">
            <h3>🎮 Customization</h3>
            <p>Build exactly what you need - gaming, work, or creative projects</p>
          </div>
          <div className="feature-card">
            <h3>🔧 Easy Upgrades</h3>
            <p>Upgrade individual components as technology advances</p>
          </div>
          <div className="feature-card">
            <h3>📚 Learn & Grow</h3>
            <p>Gain valuable technical knowledge and troubleshooting skills</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
