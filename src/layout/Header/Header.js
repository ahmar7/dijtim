import React, { useState } from "react";
import { Link, Logo } from "../../utils/allImg";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [navSwitch, setnavSwitch] = useState(false);
  let navToggle = () => {
    if (navSwitch === false) {
      setnavSwitch(true);
    } else {
      setnavSwitch(false);
    }
  };
  return (
    <>
      <div
        onClick={navToggle}
        className={navSwitch ? "overlay " : " hidden"}
      ></div>
      <div onClick={navToggle} className={navSwitch ? "close-bar " : " hidden"}>
        <i class="fa-solid fa-x"></i>
      </div>
      <div className="mbl-only bg-black">
        <div className="top-bar container-width">
          <div className="bar" onClick={navToggle}>
            <i class="fa-solid fa-bars"></i>
          </div>
          <div className="mbl-no">
            <i class="fa-solid fa-phone"></i> +45 26 65 65 02
          </div>
        </div>
      </div>
      <div className="container-width">
        <div className="navbar">
          <div className="header-logo">
            <img src={Logo} alt="" />
            <p>Din maegler - dit hjem</p>
          </div>
          <div className="header-right">
            <div className="header-social">
              <p className="num">+45 26 65 65 02</p>
              <div className="social-ico">
                <a href="" className="time-link">
                  <img src={Link} alt="" /> TILMED NYHEDSBREV
                </a>
                <a className="ico-fb twiter" href="">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a className="ico-fb fb" href="">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </div>
            </div>
            <div
              className={navSwitch ? "header-links full-open" : "header-links"}
            >
              <ul>
                <li>
                  <NavLink className="active-link ">HIJEM</NavLink>
                </li>
                <li>
                  <NavLink>BOLIGER</NavLink>
                </li>
                <li>
                  <NavLink>NYHEDER</NavLink>
                </li>
                <li>
                  <NavLink>MAEGLERE</NavLink>
                </li>
                <li>
                  <NavLink>GALLERI</NavLink>
                </li>
                <li>
                  <NavLink>KONTAKT</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
