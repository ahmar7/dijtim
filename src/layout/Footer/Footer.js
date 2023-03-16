import React from "react";
import { FooterLogo } from "../../utils/allImg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="container-width footer-flex">
        <div className="logo-list">
          <img src={FooterLogo} alt="" />
          <p className="copy-white">
            @ Copyright 2023 All rights reserved <br /> by{" "}
            <span className="gray">Dit hijem</span>
          </p>
        </div>
        <div className="footer-links">
          <h2 className="link-name">OMRADER</h2>
          <ul className="footer-ul">
            <li className="gray">
              Nordjylland <span className="white">(5)</span>
            </li>
            <li className="gray">
              Midtyjylland <span className="white">(2)</span>
            </li>
            <li className="gray">
              Ostjylland <span className="white">(1)</span>
            </li>
            <li className="gray">
              Vestjylland <span className="white">(1)</span>
            </li>
            <li className="gray">
              Sonderjylland <span className="white">(1)</span>
            </li>
            <li className="gray">
              Fyn <span className="white">(1)</span>
            </li>
            <li className="gray">
              Sjaelland <span className="white">(1)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
