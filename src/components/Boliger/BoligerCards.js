import React, { useState } from "react";
import "./BoligerCards.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {
  News1,
  News2,
  NewsPost,
  NewsPost2,
  NewsPost3,
  Property1,
  Property2,
  Property3,
  Property4,
  Property5,
  Property6,
  Property7,
  Property8,
  Tag2,
} from "../../utils/allImg";
import { NavLink } from "react-router-dom";
const BoligerCards = () => {
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
        <div className={pageHide ? " hidden page1" : "all-cards"}>
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
        <div className={pageHide ? "  all-cards" : "hidden page1"}>
          <NavLink to="/boligerdetail" className="single-propety">
            <div>
              <img className="single-prop" src={News1} alt="" />
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
              <img className="single-prop" src={News2} alt="" />
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
              <img className="single-prop" src={Property7} alt="" />
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

export default BoligerCards;
