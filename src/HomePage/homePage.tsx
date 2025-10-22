import React from 'react';
import './homePage.css';
import pcHomePageImage from '../resources/official-logo.png';
import CustomerBuildsSlider from './carousel/slideshow';
import Footer from '../Footer';
import NavBar from '../NavigationBar';

interface HomePageProps {
  className?: string;
}

const HomePage: React.FC<HomePageProps> = ({ className = '' }) => {
  return (
    <div className={`home-page ${className}`}>
      {/* Navigation Bar */}
      <NavBar />

      <div className="home-page-container" id="home">
        <div className="home-page-left">
          <img 
            src={pcHomePageImage} 
            alt="PC Building" 
            className="home-page-image"
          />
        </div>
        
        <div className="home-page-right">
          <h1>Welcome to NovaLine</h1>
          <p>
            NovaLine is a company created by Januel E. Torres Marquez focused on PC Building to help people with their dream builds. 
            This mission is at the core of everything we do. We don't just offer guides; we provide solutions that translate directly into real-world performance. 
            Over the years, our approach has helped multiple enthusiasts, professionals, and students save money and unlock the true potential of their computing power. 
            For gamers, our tailored builds mean higher frame rates and smoother gameplay on the most demanding titles. Our success is measured by the tangible improvements 
            our users experience; from a student who could finally run demanding engineering software to a freelancer who could take on larger, more complex projects.
          </p>
        </div>
      </div>

      {/* Customer Builds Slideshow Section */}
      <div id="prices">
        <CustomerBuildsSlider />
      </div>

      {/* Footer Section */}
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
