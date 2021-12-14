import React from "react";
import imageOne from "../../assets/desktop/image-gallery-milkbottles.jpg";
import imageTwo from "../../assets/desktop/image-gallery-orange.jpg";
import imageThree from "../../assets/desktop/image-gallery-cone.jpg";
import imageFour from "../../assets/desktop/image-gallery-sugarcubes.jpg";
import "./projects.css";

const Projects = () => {
  return (
    <div className="sunnyside__projects">
      <img src={imageOne} alt="" />
      <img src={imageTwo} alt="" />
      <img src={imageThree} alt="" />
      <img src={imageFour} alt="" />
    </div>
  );
};

export default Projects;
