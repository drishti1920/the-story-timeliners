import React from 'react';
import HeroSection from './components/HeroSection';
import './Home.styles.css';
import About from './components/about/About';
import PhotoGrid from './components/PhotoGrid/PhotoGrid';
import WeddingShowcase from './components/photography-section/WeddingShowcase';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <About/>
      <PhotoGrid />
      <WeddingShowcase/>
      {/* Other sections will go here */}
    </div>
  );
};

export default Home; 