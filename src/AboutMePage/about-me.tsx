import React from 'react';
import './about-me.css';
import myselfImage from '../resources/myself.jpeg';
import NavBar from '../NavigationBar';
import Footer from '../Footer';

const AboutMePage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="about-me-page">
        <div className="about-me-container">
          <div className="about-me-left">
            <div className="profile-image-wrapper">
              <img 
                src={myselfImage} 
                alt="Januel E. Torres Marquez" 
                className="profile-image"
              />
            </div>
          </div>
          
          <div className="about-me-right">
            <h1>About Me and NovaLine PC's</h1>
            <p>
             Hello! I'm Januel E. Torres Marquez, an undergraduate Software Engineering student at the University of Puerto Rico, Mayagüez Campus. 
             My academic pursuits are perfectly complemented by my enduring passion for software, technology, and, most importantly, PC building; the 
             driving force behind NovaLine PC's.
            </p>
            <p>
              My journey into the world of custom computing began in October 2020. Frustrated by off-the-shelf limitations and driven by a desire to 
              fully optimize my own computing experience, I took the leap. By the close of that year, I had successfully completed my very first custom build. 
              This initial success marked the start of a rewarding passion. Since then, I've had the pleasure of building multiple high-performance PCs for myself, 
              friends, and family, with each project consistently sharpening my technical skills and deepening my expertise in computer hardware.
            </p>
            <p>
              Building on this hands-on experience, I've dedicated myself to mastering the details of component compatibility, performance optimization, and 
              budget-conscious planning. This comprehensive knowledge empowers me to do more than just assemble; I help others craft their truly ideal PC setups, 
              meticulously tailored to their specific needs, workflows, and budgets.
            </p>
            <p>
              With NovaLine PC's, I aim to share this knowledge and passion with a wider audience. My goal is to guide you in achieving your own dream build with 
              confidence and ease, transforming what can seem like a complex task into an exciting and rewarding experience. Let's build something incredible together! 🚀
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMePage;
