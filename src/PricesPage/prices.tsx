import React from 'react';
import './prices.css';

import dummyLogo from '../resources/navbar-logo.png';

import NavBar from '../NavigationBar';
import Footer from '../Footer';

interface PCSpec {
  label: string;
  value: string;
}

interface PCTier {
  id: number;
  tier: string;
  price: string;
  priceDescription: string;
  image: string;
  specs: PCSpec[];
  link?: string;
  buttonText?: string;
}

const pcTiers: PCTier[] = [
  {
    id: 1,
    tier: 'Entry Level',
    price: '$800-$1,500',
    priceDescription: 'Perfect for casual gaming and everyday tasks',
    image: dummyLogo,
    link: 'https://pcpartpicker.com/list/nGGp74',
    buttonText: 'View Build',
    specs: [
      { label: 'CPU', value: 'AMD Ryzen 7 5700' },
      { label: 'GPU', value: 'NVIDIA RTX 5060' },
      { label: 'RAM', value: '32GB DDR4 3200MHz' },
      { label: 'Storage', value: '1TB NVMe SSD' },
      { label: 'Motherboard', value: 'B550 Chipset' },
      { label: 'PSU', value: '650W 80+ Bronze' },
      { label: 'Case', value: 'Mid Tower' }
    ]
  },
  {
    id: 2,
    tier: 'Mid-Range',
    price: '$1,600-$2,900',
    priceDescription: 'Great for 1440p gaming and content creation',
    image: dummyLogo,
    link: 'https://pcpartpicker.com/list/g78p74',
    buttonText: 'View Build',
    specs: [
      { label: 'CPU', value: 'AMD Ryzen 7 7700X' },
      { label: 'GPU', value: 'NVIDIA RTX 5070' },
      { label: 'RAM', value: '32GB DDR5 6000MHz' },
      { label: 'Storage', value: '2TB NVMe Gen4 SSD' },
      { label: 'Motherboard', value: 'B850 AM5 Chipset' },
      { label: 'PSU', value: '750W 80+ Gold Modular' },
      { label: 'Case', value: 'Premium Mid Tower' }
    ]
  },
  {
    id: 3,
    tier: 'High-End',
    price: '$3,000+',
    priceDescription: 'Ultimate performance for 4K gaming and professional work',
    image: dummyLogo,
    link: 'https://pcpartpicker.com/list/LMC7t3',
    buttonText: 'View Build',
    specs: [
      { label: 'CPU', value: 'AMD Ryzen 9 9900X' },
      { label: 'GPU', value: 'NVIDIA RTX 5080' },
      { label: 'RAM', value: '64GB DDR5 6000MHz' },
      { label: 'Storage', value: '4TB NVMe Gen4 SSD' },
      { label: 'Motherboard', value: 'X870E' },
      { label: 'PSU', value: '850W 80+ Platinum Modular' },
      { label: 'Case', value: 'Lian Li PC-O11 Dynamic' }
    ]
  }
];

const PricesPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="prices-page">
        <div className="prices-container">
          <div className="prices-header">
            <h1>Choose Your Perfect Build</h1>
            <p>Select from our recommended PC builds tailored to your needs</p>
        </div>

        <div className="disclaimer">
            <p>
              <strong>Note:</strong> We offer a range of recommended builds tailored to various budgets. However, these are not the only systems we can create. 
              For custom parts and personalized configurations, please feel free to contact us.
            </p>
          </div>

        <div className="prices-grid">
          {pcTiers.map((pc) => (
            <div key={pc.id} className="pc-card">
              <div className="pc-card-header">
                <h2>{pc.tier}</h2>
                <div className="price">{pc.price}</div>
                <div className="price-description">{pc.priceDescription}</div>
              </div>

              <div className="pc-image-container">
                <img 
                  src={pc.image} 
                  alt={`${pc.tier} PC Build`} 
                  className="pc-image"
                />
              </div>

              <div className="pc-specs">
                <h3>Specifications</h3>
                {pc.specs.map((spec, index) => (
                  <div key={index} className="spec-item">
                    <span className="spec-label">{spec.label}:</span>
                    <span className="spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>

              {pc.link ? (
                <a 
                  href={pc.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="buy-button"
                  style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
                >
                  {pc.buttonText || 'Get Started'}
                </a>
              ) : (
                <button className="buy-button">
                  {pc.buttonText || 'Get Started'}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Installation Prices Section */}
        <div className="installation-section">
          <h2 className="installation-title">Installation Services</h2>
          <p className="installation-description">
            Installation service prices vary depending on the type of computer you want to build. 
            For more information and personalized pricing, please contact me through any of my platforms.
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default PricesPage;
