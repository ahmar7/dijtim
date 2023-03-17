import React from "react";
import { NavLink } from "react-router-dom";
import { NewsPost, NewsPost2, NewsPost3 } from "../../utils/allImg";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="bg-section">
      <div className="container-width">
        <div className="single-white">
          <div className="news-img">
            <img src={NewsPost} alt="" />
            <div className="bg-blue">
              <h3>Hvad er en tilstandsrapport?</h3>
              <p>marts 04, 2023</p>
            </div>
          </div>
          <div className="news-white">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              provident quaerat unde dist
            </p>
            <div className="mere">
              <NavLink to="/nyhederdetail">
                <button className="se-mere">Se mere</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="single-white">
          <div className="news-img">
            <img src={NewsPost2} alt="" />
            <div className="bg-blue">
              <h3>Hvad er en tilstandsrapport?</h3>
              <p>marts 04, 2023</p>
            </div>
          </div>
          <div className="news-white">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              provident quaerat unde dist
            </p>
            <div className="mere">
              <NavLink to="/nyhederdetail">
                <button className="se-mere">Se mere</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="single-white">
          <div className="news-img">
            <img src={NewsPost3} alt="" />
            <div className="bg-blue">
              <h3>Hvad er en tilstandsrapport?</h3>
              <p>marts 04, 2023</p>
            </div>
          </div>
          <div className="news-white">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              provident quaerat unde dist
            </p>
            <div className="mere">
              <NavLink to="/nyhederdetail">
                <button className="se-mere">Se mere</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="pagination">
          <p>{"<"}</p>
          <p className="pg-active">1</p>
          <p>2</p>
          <p>{">"}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
