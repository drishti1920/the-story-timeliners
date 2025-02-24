import React from 'react'
import "./About.css"
import about1 from "../../../../assets/images/about1.jpg"
import about2 from "../../../../assets/images/about2.jpg"


const About = () => {
  return (
    <section className="modern-approach">
      <div className="title-container">
        <h1 className="main-title">
          A MODERN APPROACH
          <br />
          <span className="title-italic">to an</span> AGE OLD TRADITION
        </h1>
      </div>

      <div className="content-grid">
        <img 
          src={about1}
          alt="Bride in detailed wedding attire"
          className="image left-image"
        />
        
        <div className="text-content">
          <p className="description">
            Considered to be the epitome of Modern Photography and Filmmaking, HOTC has
            transformed the Indian Wedding landscape on a regular basis. For almost a decade House
            On The Clouds has been creating photographs and films which are timeless and have been
            etched in memories of thousands of people forever.
          </p>
          <p className="description">
            Awarded as the Wedding Filmmaker of the year for four consecutive years at the
            Weddingsutra awards along with numerous other awards HOTC is the only company listed
            on IMDB for its award winning films.
          </p>
        </div>

        <img 
          src={about2}
          alt="Bride in wedding dress at scenic location"
          className="image right-image"
        />
      </div>

    </section>
  )
}

export default About