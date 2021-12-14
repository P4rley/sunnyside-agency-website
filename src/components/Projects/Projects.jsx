import React from "react";
import imageOne from "../../assets/desktop/image-gallery-milkbottles.jpg";
import imageTwo from "../../assets/desktop/image-gallery-orange.jpg";
import imageThree from "../../assets/desktop/image-gallery-cone.jpg";
import imageFour from "../../assets/desktop/image-gallery-sugarcubes.jpg";
import "./projects.css";

const Projects = () => {
  return (
    <div className="sunnyside__projects">
      <img src={imageOne} alt="milk" />
      <img src={imageTwo} alt="orange" />
      <img src={imageThree} alt="cone" />
      <img src={imageFour} alt="sugarcubes" />
    </div>
  );
};

export default Projects;
