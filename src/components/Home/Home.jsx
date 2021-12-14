import React from "react";
import "./home.css";
import arrow from "../../assets/icon-arrow-down.svg";

const Home = () => {
  return (
    <div className="sunnyside__home" id="home">
      <div className="sunnyside__home-container section__padding">
        <h1 className="sunnyside__home-heading">We are creatives</h1>
        <a href="#services">
          <img src={arrow} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Home;
