import React from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <div className="sunnyside__footer section__padding" id="footer">
      <div className="sunnyside__footer-heading">
        sunnyside
      </div>

      <div className="sunnyside__footer-links">
        <a href="#home">About</a>
        <a href="#services">Services</a>
        <a href="#project">Projects</a>
      </div>

      <div className="funnyside__footer-social">
        <a href="/">
          <AiFillFacebook size={20} />
        </a>
        <a href="/">
          <AiOutlineInstagram size={20} />
        </a>
        <a href="/">
          <AiOutlineTwitter size={20} />
        </a>
        <a href="/">
          <FaPinterest size={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
