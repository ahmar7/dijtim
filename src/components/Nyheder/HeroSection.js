import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  News4,
  News5,
  NewsPost,
  NewsPost1,
  NewsPost2,
  NewsPost3,
} from "../../utils/allImg";
import "./HeroSection.css";
const HeroSection = () => {
  const [pageHide, setpageHide] = useState(false);
  let showPage2 = () => {
    if (pageHide === false) {
      setpageHide(true);
    } else {
      setpageHide(false);
    }
  };
  let showPages1 = () => {
    setpageHide(false);
  };
  let showPages2 = () => {
    setpageHide(true);
  };
  return (
    <div className="bg-section">
      <div className="container-width">
        <div className={pageHide ? " hidden" : "page1"}>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia provident quaerat unde dist
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia provident quaerat unde dist
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia provident quaerat unde dist
              </p>
              <div className="mere">
                <NavLink to="/nyhederdetail">
                  <button className="se-mere">Se mere</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className={pageHide ? "page2 " : " hidden"}>
          <div className="single-white">
            <div className="news-img">
              <img src={NewsPost1} alt="" />
              <div className="bg-blue">
                <h3>Hvad er en tilstandsrapport?</h3>
                <p>marts 04, 2023</p>
              </div>
            </div>
            <div className="news-white">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia provident quaerat unde dist
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
              <img src={News4} alt="" />
              <div className="bg-blue">
                <h3>Hvad er en tilstandsrapport?</h3>
                <p>marts 04, 2023</p>
              </div>
            </div>
            <div className="news-white">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia provident quaerat unde dist
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
              <img src={News5} alt="" />
              <div className="bg-blue">
                <h3>Hvad er en tilstandsrapport?</h3>
                <p>marts 04, 2023</p>
              </div>
            </div>
            <div className="news-white">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia provident quaerat unde dist
              </p>
              <div className="mere">
                <NavLink to="/nyhederdetail">
                  <button className="se-mere">Se mere</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <p onClick={showPages1}>{"<"}</p>
          <p onClick={showPages1} className={pageHide ? "" : "pg-active"}>
            1
          </p>
          <p onClick={showPages2} className={pageHide ? "pg-active" : ""}>
            2
          </p>
          <p onClick={showPages2}>{">"}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
