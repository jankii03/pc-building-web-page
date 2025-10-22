import { useState, useEffect } from "react";
import './slideshow.css';

import pcIsmaelImage from '../../resources/pc-ismael.jpeg';
import pc1Image from '../../resources/pc1.jpeg';
import pc2Allan from '../../resources/allan-pc.jpg';
import pcJanuel from '../../resources/januel-pc.jpg';

import userPfpLogo from '../../resources/user-pfp-logo.jpg';

// Interface for customer build data
interface CustomerBuild {
  id: number;
  setupImage: string;
  userImage: string;
  userName: string;
  rating: number;
  review: string;
}

// Customer builds data array
const customerBuilds: CustomerBuild[] = [
  {
    id: 1,
    setupImage: pc2Allan,
    userImage: userPfpLogo,
    userName: "Allan",
    rating: 5,
    review: "Gracias por la ayuda con el build! Todo funciona al pelo."
  },
  {
    id: 2,
    setupImage: pcIsmaelImage,
    userImage: userPfpLogo,
    userName: "Misael",
    rating: 5,
    review: "DIABLO QUE DURA SE VE CON TO' PUESTO! Mil gracias socio."
  },
  {
    id: 3,
    setupImage: pc1Image,
    userImage: userPfpLogo,
    userName: "Ismael",
    rating: 5,
    review: "Ya tengo la PC bro. Todo el setup esta super bien armado y funcionando de lujo. Gracias por la ayuda!"
  },
  {
    id: 4,
    setupImage: pcJanuel,
    userImage: userPfpLogo,
    userName: "Januel",
    rating: 5,
    review: "Como el creador de esta compania, me he dedicado a asegurar que cada cliente reciba la mejor experiencia posible en la construccion de su PC. Y con esta motivacion he logrado crear mi propio setup, motivando a otros a seguir sus sueños de construir la PC perfecta."
  }
];

export default function CustomerBuildsSlider() {
  // State to keep track of the current slide index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the slider is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + customerBuilds.length) % customerBuilds.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % customerBuilds.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered, currentIndex]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  // Render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < rating ? 'star filled' : 'star'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="customer-builds-section">
      <h2 className="customer-builds-title">Customer Builds</h2>
      
      <div className="slider-wrapper">
        <div
          className="slide-container"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <div className="slide-content">
            {/* PC Setup Image */}
            <div className="setup-image-container">
              <img
                src={customerBuilds[currentIndex].setupImage}
                alt={`${customerBuilds[currentIndex].userName}'s PC Setup`}
                className="setup-image"
              />
            </div>

            {/* Review Box */}
            <div className="review-box">
              <div className="user-info">
                <img
                  src={customerBuilds[currentIndex].userImage}
                  alt={customerBuilds[currentIndex].userName}
                  className="user-avatar"
                />
                <div className="user-details">
                  <h3 className="user-name">{customerBuilds[currentIndex].userName}</h3>
                  {renderStars(customerBuilds[currentIndex].rating)}
                </div>
              </div>
              <p className="review-text">{customerBuilds[currentIndex].review}</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="nav-button left-button"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          className="nav-button right-button"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {customerBuilds.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}