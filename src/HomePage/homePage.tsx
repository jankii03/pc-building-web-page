import React from 'react';
import './homePage.css';
import pcHomePageImage from './resources/pc-home-page.jpg';
import CustomerBuildsSlider from './carousel/slideshow';
import Footer from './Footer';

interface HomePageProps {
  className?: string;
}

const HomePage: React.FC<HomePageProps> = ({ className = '' }) => {
  return (
    <div className={`home-page ${className}`}>
      <div className="home-page-container">
        <div className="home-page-left">
          <img 
            src={pcHomePageImage} 
            alt="PC Building" 
            className="home-page-image"
          />
        </div>
        
        <div className="home-page-right">
          <h1>Welcome to PC Building Guide</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
            adipisci velit.
          </p>
        </div>
      </div>

      {/* Customer Builds Slideshow Section */}
      <CustomerBuildsSlider />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
