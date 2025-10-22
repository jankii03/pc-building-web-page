import React from 'react';
import './contact-me.css';
import NavBar from '../NavigationBar';
import Footer from '../Footer';
import { Mail, Phone, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';

const ContactMePage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="contact-me-page">
        <div className="contact-me-container">
          <div className="contact-header">
            <h1>Get In Touch</h1>
            <p>Have a question? Feel free to reach out!</p>
          </div>

          <div className="contact-grid">
            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={40} />
              </div>
              <h3>Email</h3>
              <a href="mailto:januel.torres@upr.edu" className="contact-link">
                januel.torres@upr.edu
              </a>
            </div>

            {/* Phone Card */}
            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={40} />
              </div>
              <h3>Phone</h3>
              <a href="tel:+17874513165" className="contact-link">
                +1 (787) 451-3165
              </a>
            </div>

            {/* Instagram Card */}
            <div className="contact-card">
              <div className="contact-icon">
                <Instagram size={40} />
              </div>
              <h3>Instagram</h3>
              <a 
                href="https://www.instagram.com/jankii03?igsh=aDQ3bmx1YzVtcmw3&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                @jankii03
              </a>
            </div>

            {/* Facebook Card */}
            <div className="contact-card">
              <div className="contact-icon">
                <Facebook size={40} />
              </div>
              <h3>Facebook</h3>
              <a 
                href="https://www.facebook.com/share/19pDyncUqj/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                Januel Torres
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-card">
              <div className="contact-icon">
                <Linkedin size={40} />
              </div>
              <h3>LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/januel-torres" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                Januel E. Torres Marquez
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="contact-card">
              <div className="contact-icon">
                <MessageCircle size={40} />
              </div>
              <h3>WhatsApp</h3>
              <a 
                href="https://wa.me/17874513165" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                Message Me!
              </a>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="contact-info-box">
            <h2>Business Hours</h2>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactMePage;
