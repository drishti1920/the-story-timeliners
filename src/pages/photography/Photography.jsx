import React from "react";
import styles from "./Photography.module.css";
import photo1 from "../../assets/images/photo1.jpg";
import photo2 from "../../assets/images/photo2.jpg";
import photo3 from "../../assets/images/photo3.jpg";
import photo4 from "../../assets/images/photo4.jpg";
import photo5 from "../../assets/images/photo5.jpg";
import photo6 from "../../assets/images/photo6.jpg";
import photo7 from "../../assets/images/photo7.jpg";
import photo8 from "../../assets/images/photo8.jpg";
import Card from "../../components/common/card/Card";


const Photography = () => {
  // Sample wedding data - replace with your actual data or API call
  const weddingData = [
    {
      id: 1,
      image: photo1,
      couple: "Reva & Zach",
      description: "Let's call this our Happy New Year Wedding. We welcomed 2024 partying with Reva and Zach and we couldn't have asked for a better beginning for the new year. This was quite an experience for us and the 450 American friends of Reva and Zach who flew all the way to Udaipur for this cross cultural union.",
      category: "Indian",
      readMoreLink: "/weddings/reva-zach"
    },
    {
      id: 2,
      image: photo2,
      description: "An evening of love, style and blend of two cultures in the heart of Singapore.",
      couple: "",
      category: "International",
      readMoreLink: "/weddings/singapore"
    },
    {
      id: 3,
      image: photo3,
      couple: "Alia & Ranbir, Mumbai",
      description: "Two of the greatest actors of this generation decided to get married in the simplest possible way - in their balcony surrounded by only 30 of their closest friends and family members. We spent three days in their Apartment and witnessed love in its purest form.",
      category: "Indian",
      readMoreLink: "/weddings/alia-ranbir"
    },
    {
      id: 4,
      image: photo4,
      couple: "Kiara & Siddharth",
      description: "",
      category: "Indian",
      readMoreLink: "/weddings/kiara-siddharth"
    }
  ];

  return (
    <div className={styles.photographyContainer}>
      <div className={styles.photographyGrid}>
        {weddingData.map((wedding) => (
          <div key={wedding.id} className={styles.cardWrapper}>
            <Card 
              image={wedding.image}
              name={wedding.couple}
              description={wedding.description}
              category={wedding.category}
              readMoreLink={wedding.readMoreLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;