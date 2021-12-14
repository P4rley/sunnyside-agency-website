import React, { useState, useEffect } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import imageOne from "../../assets/logo.svg";

const Menu = () => (
  <>
    <li>
      <a href="#home" className="sunnyside__navbar-link">
        About
      </a>
    </li>
    <li>
      <a href="#services" className="sunnyside__navbar-link">
        Services
      </a>
    </li>
    <li>
      <a href="#Projects" className="sunnyside__navbar-link">
        Projects
      </a>
    </li>
    <button type="button">Contact</button>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <div
      className={scrollNav ? "sunnyside__navbar active" : "sunnyside__navbar"}
    >
      <div className="sunnyside__logo">
        <a href="#home">
          <img src={imageOne} alt="logo" />
        </a>
      </div>

      <div className="sunnyside__navbar-container">
        <ul className="sunnyside__navbar-container_links">
          <Menu />
        </ul>
      </div>

      <div className="sunnyside__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size="30"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size="30"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="sunnyside__navbar-menu_container">
            <ul className="sunnyside__navbar-menu_container_links">
              <Menu />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
