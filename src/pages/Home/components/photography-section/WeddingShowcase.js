import React from "react";
import "./WeddingShowcase.css";
import photo1 from "../../../../assets/images/photo1.jpg";
import photo2 from "../../../../assets/images/photo2.jpg";
import photo3 from "../../../../assets/images/photo3.jpg";
import photo4 from "../../../../assets/images/photo4.jpg";
import Card from "../../../../components/common/card/Card";

const WeddingShowcase = () => {
  const weddings = [
    {
      id: 1,
      couple: "Reva & Zach",
      date: "Oct 7, 2024",
      image: photo1,
      location: "Jaipur",
    },
    {
      id: 2,
      couple: "Sarah & James",
      date: "Aug 25, 2024",
      image: photo2,
      location: "Udaipur",
    },
    {
      id: 3,
      couple: "Alia & Ranbir",
      date: "Aug 8, 2024",
      image: photo3,
      location: "Mumbai",
    },
    {
      id: 4,
      couple: "Kiara & Siddharth",
      date: "Apr 24, 2024",
      image: photo4,
      location: "Lucknow",
    },
  ];

  return (
    <div className="wedding-showcase">
      <div className="wedding-grid">
        {weddings.map((wedding) => (
          <Card
            key={wedding.id}
            image={wedding.image}
            name={wedding.couple}
            location={wedding.location}
            date={wedding.date}
          />
        ))}
      </div>
    </div>
  );
};

export default WeddingShowcase;
