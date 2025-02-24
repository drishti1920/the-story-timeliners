import React from 'react';
import HeroSection from './components/HeroSection';
import './Home.styles.css';
import About from './components/about/About';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <About/>
      {/* Other sections will go here */}
    </div>
  );
};

export default Home; 