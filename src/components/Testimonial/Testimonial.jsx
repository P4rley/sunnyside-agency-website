import React from "react";
import imageOne from "../../assets/image-emily.jpg";
import imageTwo from "../../assets/image-jennie.jpg";
import imageThree from "../../assets/image-thomas.jpg";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="sunnyside__testimonial section__padding" id="testimonial">
      <h1 className="sunnyside__testimonial-heading">Client Testimonial</h1>
      <div className="sunnyside__testimonial-container">
        <div className="sunnyside__testimonial-content">
          <img src={imageOne} alt="picture" />
          <p>
            We put our trust in Sunnyside wand they delivered, making sure our
            needs were met and deadlines were always hit
          </p>
          <h5>Emily R.</h5>
          <span>Marketing Director</span>
        </div>
        <div className="sunnyside__testimonial-content">
          <img src={imageThree} alt="picture" />
          <p>
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <h5>Thomas S.</h5>
          <span>Chief Operating Oofficer</span>
        </div>
        <div className="sunnyside__testimonial-content">
          <img src={imageTwo} alt="" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h5>Jennie F.</h5>
          <span>Business Owner</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
