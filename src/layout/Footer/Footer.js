import React from "react";
import { FooterLogo } from "../../utils/allImg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-lists container-width">
        <div className=" footer-flex">
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
        <div className="footer-flex">
          <div className="footer-links">
            <h2 className="link-name">BOLIGER TIL SALG</h2>
            <ul className="footer-ul">
              <li className="gray">
                Till slag <span className="white"> (12)</span>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h2 className="link-name">FIND OS OGSA HER</h2>
            <a className="ico-fb-footer no-border" href="">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a className="ico-fb-footer  " href="">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
