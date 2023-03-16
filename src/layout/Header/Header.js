import React from "react";
import { Link, Logo } from "../../utils/allImg";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
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
          <div className="header-links">
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
  );
};

export default Header;
