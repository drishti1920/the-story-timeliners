import React from "react";
import "./Card.css";

const Card = ({ image, name, location, date }) => {
  return (
    <div className="wedding-card">
      <div className="wedding-image-container">
        <img
          src={image}
          alt={`${name} wedding`}
          className="wedding-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/api/placeholder/400/500";
          }}
        />
      </div>
      <div className="wedding-info">
        <h3 className="couple-name">{name}</h3>
        <div className="wedding-details">
          {location && <span className="wedding-location">{location}</span>}
          {location && <span className="separator">, </span>}
          <span className="wedding-date">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
