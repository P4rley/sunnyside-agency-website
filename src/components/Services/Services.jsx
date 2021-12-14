import React from "react";
import "./services.css";
import imageOne from "../../assets/desktop/image-transform.jpg";
import imageTwo from "../../assets/desktop/image-stand-out.jpg";

const Services = () => {
  return (
    <div className="sunnyside__services" id="services">
      <div className="sunnyside__services-container">
        <div className="sunnyside__services-container-contentA">
          <img src={imageOne} alt="image1" />
        </div>
        <div className="sunnyside__services-container-contentB">
          <h1>Transform your brand</h1>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="/">learn more</a>
        </div>

        <div className="sunnyside__services-container-contentA2">
          <img src={imageTwo} alt="image2" />
        </div>
        <div className="sunnyside__services-container-contentB2">
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extended your brand in digital places.
          </p>
          <a href="/">learn more</a>
        </div>

        <div className="sunnyside__services-container-contentA3">
          <h1>Graphic Design</h1>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential client's
            attention
          </p>
        </div>

        <div className="sunnyside__services-container-contentB3">
          <h1>Photography</h1>
          <p>
            Increase your credibility by getting the most stunning,
            high-quallity photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
