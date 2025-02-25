import React from 'react';
import './WeddingShowcase.css';
import photo1 from "../../../../assets/images/photo1.jpg";
import photo2 from "../../../../assets/images/photo2.jpg";
import photo3 from "../../../../assets/images/photo3.jpg";
import photo4 from "../../../../assets/images/photo4.jpg";



const WeddingShowcase = () => {
  // Sample wedding data
  const weddings = [
    {
      id: 1,
      couple: 'Reva & Zach',
      date: 'Oct 7, 2024',
      image: photo1,
      location: 'Jaipur'
    },
    {
      id: 2,
      couple: 'Sarah & James',
      date: 'Aug 25, 2024',
      image: photo2,
      location: 'Udaipur'
    },
    {
      id: 3,
      couple: 'Alia & Ranbir',
      date: 'Aug 8, 2024',
      image: photo3,
      location: 'Mumbai'
    },
    {
      id: 4,
      couple: 'Kiara & Siddharth',
      date: 'Apr 24, 2024',
      image: photo4,
      location: 'Lucknow'
    }
  ];

  return (
    <div className="wedding-showcase">
      <div className="wedding-grid">
        {weddings.map((wedding) => (
          <div key={wedding.id} className="wedding-card">
            <div className="wedding-image-container">
              <img 
                src={wedding.image} 
                alt={`${wedding.couple} wedding`} 
                className="wedding-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/api/placeholder/400/500';
                }}
              />
            </div>
            <div className="wedding-info">
              <h3 className="couple-name">{wedding.couple}</h3>
              <div className="wedding-details">
                {wedding.location && (
                  <span className="wedding-location">{wedding.location}</span>
                )}
                {wedding.location && <span className="separator">, </span>}
                <span className="wedding-date">{wedding.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingShowcase;