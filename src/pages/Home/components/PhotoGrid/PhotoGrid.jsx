import React from "react";
import "./PhotoGrid.css";
import grid1 from "../../../../assets/images/grid1.jpg";
import grid2 from "../../../../assets/images/grid2.jpg";
import grid3 from "../../../../assets/images/grid3.jpg";
import grid4 from "../../../../assets/images/grid4.jpg";
import grid5 from "../../../../assets/images/grid5.jpg";
import grid6 from "../../../../assets/images/grid6.jpg";
import grid7 from "../../../../assets/images/grid7.jpg";
import grid8 from "../../../../assets/images/grid8.jpg";
import grid9 from "../../../../assets/images/grid9.jpg";
import grid10 from "../../../../assets/images/grid10.jpg";
import grid11 from "../../../../assets/images/grid11.jpg";
import grid12 from "../../../../assets/images/grid12.jpg";
import grid13 from "../../../../assets/images/grid13.jpg";
import grid14 from "../../../../assets/images/grid14.jpg";
import grid15 from "../../../../assets/images/grid15.jpg";

const PhotoGrid = () => {

   const images = [
      { src: grid1, alt: "Gallery image 1" },
      { src: grid2, alt: "Gallery image 2" },
      { src: grid3, alt: "Gallery image 3" },
      { src: grid4, alt: "Gallery image 4" },
      { src: grid5, alt: "Gallery image 5" },
      { src: grid6, alt: "Gallery image 6" },
      { src: grid7, alt: "Gallery image 7" },
      { src: grid8, alt: "Gallery image 8" },
      { src: grid9, alt: "Gallery image 9" },
      { src: grid10, alt: "Gallery image 10" },
      { src: grid11, alt: "Gallery image 11" },
      { src: grid12, alt: "Gallery image 12" },
      { src: grid13, alt: "Gallery image 13" },
      { src: grid14, alt: "Gallery image 14" },
      { src: grid15, alt: "Gallery image 15" },
    ];

  return (
    <div className="gallery-grid-wrapper">
      {images.map((image, index) => (
        <div key={index} className="picture-container">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
