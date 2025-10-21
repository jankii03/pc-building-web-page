import { useState, useEffect } from "react";
import './slideshow.css';
import dummySetupImage from '../resources/dummy-setup.jpg';
import userPfpLogo from '../resources/user-pfp-logo.jpg';

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
    setupImage: dummySetupImage,
    userImage: userPfpLogo,
    userName: "John Doe",
    rating: 5,
    review: "Amazing experience building my first PC! The guide was clear and easy to follow. My new gaming rig runs perfectly and I couldn't be happier with the results."
  },
  {
    id: 2,
    setupImage: dummySetupImage,
    userImage: userPfpLogo,
    userName: "Sarah Johnson",
    rating: 5,
    review: "This website made PC building so simple! I built a workstation for my design work and it's incredibly fast. Highly recommend to anyone looking to build their own PC."
  },
  {
    id: 3,
    setupImage: dummySetupImage,
    userImage: userPfpLogo,
    userName: "Mike Chen",
    rating: 4,
    review: "Great resource for PC builders. The step-by-step instructions were helpful and saved me a lot of time. My new setup handles everything I throw at it!"
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