import React, { useState } from "react";
import { Menu } from "lucide-react";
import "./HeroSection.css";
import bacngroundVideo from "../../../../assets/videos/hero-bg.mp4";

const HeroSection = () => {
  

  return (
    <header className="hero-header">
      <div className="container">
      
        <section className="showcase">
          <h1>Curvy Road in Snow Covered Forest</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            obcaecati, fuga amet esse quisquam dicta suscipit quasi officia
            dolorum voluptas. Iste ab beatae quas modi!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            vitae perspiciatis blanditiis perferendis tenetur aut tempora eaque,
            officiis hic nostrum?
          </p>
          <button>See More</button>
        </section>
      </div>

      <div className="video-container">
        <video src={bacngroundVideo} autoPlay loop muted />
      </div>
    </header>
  );
};

export default HeroSection;
