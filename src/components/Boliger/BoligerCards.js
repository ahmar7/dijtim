import React from "react";
import "./BoligerCards.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {
  Property1,
  Property2,
  Property3,
  Property4,
  Property5,
  Property6,
  Tag2,
} from "../../utils/allImg";
import { NavLink } from "react-router-dom";
const BoligerCards = () => {
  const options1 = ["Sorter efter", "Option 1", "Option 2"];
  const defaultOption1 = options1[0];
  return (
    <div className="main-blogcards">
      <div className="container-width">
        <div className="blog-filter">
          <div className="boliger-select">
            <h2>12 boliger fundet</h2>
          </div>
          <Dropdown
            className="location-select"
            options={options1}
            value={defaultOption1}
            placeholder="Select an option"
          />
        </div>
        <div className="all-cards">
          <NavLink to="/boligerdetail" className="single-propety">
            <div>
              <img className="single-prop" src={Property1} alt="" />
              <img src={Tag2} alt="" className="tag2" />
              <div className="white-prop">
                <h4>Hvasgerj 30</h4>
                <div className="collect">
                  <p className="loc">
                    <i class="fa-solid fa-location-dot"></i> stiory berf, 4600
                    koga
                  </p>{" "}
                  <p className="ab-num">1.825.000</p>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/boligerdetail" className="single-propety">
            <div>
              <img className="single-prop" src={Property2} alt="" />
              <img src={Tag2} alt="" className="tag2" />
              <div className="white-prop">
                <h4>Hvasgerj 30</h4>
                <div className="collect">
                  <p className="loc">
                    <i class="fa-solid fa-location-dot"></i> stiory berf, 4600
                    koga
                  </p>{" "}
                  <p className="ab-num">1.825.000</p>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/boligerdetail" className="single-propety">
            <div>
              <img className="single-prop" src={Property3} alt="" />
              <img src={Tag2} alt="" className="tag2" />
              <div className="white-prop">
                <h4>Hvasgerj 30</h4>
                <div className="collect">
                  <p className="loc">
                    <i class="fa-solid fa-location-dot"></i> stiory berf, 4600
                    koga
                  </p>{" "}
                  <p className="ab-num">1.825.000</p>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/boligerdetail" className="single-propety">
            <div>
              <img className="single-prop" src={Property4} alt="" />
              <img src={Tag2} alt="" className="tag2" />
              <div className="white-prop">
                <h4>Hvasgerj 30</h4>
                <div className="collect">
                  <p className="loc">
                    <i class="fa-solid fa-location-dot"></i> stiory berf, 4600
                    koga
                  </p>{" "}
                  <p className="ab-num">1.825.000</p>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/boligerdetail" className="single-propety">
            <div>
              <img className="single-prop" src={Property5} alt="" />
              <img src={Tag2} alt="" className="tag2" />
              <div className="white-prop">
                <h4>Hvasgerj 30</h4>
                <div className="collect">
                  <p className="loc">
                    <i class="fa-solid fa-location-dot"></i> stiory berf, 4600
                    koga
                  </p>{" "}
                  <p className="ab-num">1.825.000</p>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/boligerdetail" className="single-propety">
            <div>
              <img className="single-prop" src={Property6} alt="" />
              <img src={Tag2} alt="" className="tag2" />
              <div className="white-prop">
                <h4>Hvasgerj 30</h4>
                <div className="collect">
                  <p className="loc">
                    <i class="fa-solid fa-location-dot"></i> stiory berf, 4600
                    koga
                  </p>{" "}
                  <p className="ab-num">1.825.000</p>
                </div>
              </div>
            </div>
          </NavLink>
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

export default BoligerCards;
