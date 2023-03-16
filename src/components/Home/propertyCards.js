import React from "react";
import "./propertyCards.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {
  Property1,
  Property2,
  Property3,
  Property4,
  Property5,
  Property6,
  Property7,
  Property8,
  Tag,
} from "../../utils/allImg";
const PropertyCards = () => {
  const options1 = ["Omrade (Alle)", "Option 1", "Option 2"];
  const defaultOption1 = options1[0];
  const options2 = ["Pris Fra (Alle)", "Option 1", "Option 2"];
  const defaultOption2 = options2[0];
  const options3 = ["Pris Til (Alle)", "Option 1", "Option 2"];
  const defaultOption3 = options3[0];
  return (
    <>
      <div className="filter-cards">
        <div className="container-width drop-filter">
          <Dropdown
            className="location-select"
            options={options1}
            value={defaultOption1}
            placeholder="Select an option"
          />
          <Dropdown
            className="location-select"
            options={options2}
            value={defaultOption2}
            placeholder="Select an option"
          />
          <Dropdown
            className="location-select"
            options={options3}
            value={defaultOption3}
            placeholder="Select an option"
          />
          <div className="filter-btn">
            <button>SOG</button>
          </div>
        </div>
      </div>
      <div className="cards-flex container-width">
        <div className="indiv-card">
          <img className="prop-img" src={Property1} alt="" />
          <div className="absolute-desc">
            <div className="left-desc">
              <p className="ab-white">Havsgardsvej 30</p>
              <p className="ab-num">1.825.000</p>
            </div>
            <div className="right-desc">
              <img src={Tag} alt="" />
            </div>
          </div>
        </div>
        <div className="indiv-card">
          <img className="prop-img" src={Property2} alt="" />
          <div className="absolute-desc">
            <div className="left-desc">
              <p className="ab-white">Flintoksen 32</p>
              <p className="ab-num">5.400.000</p>
            </div>
            <div className="right-desc">
              <img src={Tag} alt="" />
            </div>
          </div>
        </div>
        <div className="indiv-card">
          <img className="prop-img" src={Property3} alt="" />
          <div className="absolute-desc">
            <div className="left-desc">
              <p className="ab-white">Slagkrogen 77</p>
              <p className="ab-num">1.650.000</p>
            </div>
            <div className="right-desc">
              <img src={Tag} alt="" />
            </div>
          </div>
        </div>
        <div className="indiv-card">
          <img className="prop-img" src={Property4} alt="" />
          <div className="absolute-desc">
            <div className="left-desc">
              <p className="ab-white">Tendrupvej 7A</p>
              <p className="ab-num">7.400.000</p>
            </div>
            <div className="right-desc">
              <img src={Tag} alt="" />
            </div>
          </div>
        </div>
        <div className="indiv-card">
          <img className="prop-img" src={Property5} alt="" />
          <div className="absolute-desc">
            <div className="left-desc">
              <p className="ab-white">Elmehusene 302</p>
              <p className="ab-num">4.750.000</p>
            </div>
            <div className="right-desc">
              <img src={Tag} alt="" />
            </div>
          </div>
        </div>
        <div className="indiv-card">
          <img className="prop-img" src={Property6} alt="" />
          <div className="absolute-desc">
            <div className="left-desc">
              <p className="ab-white">Stubyvej 6</p>
              <p className="ab-num">3.000.000</p>
            </div>
            <div className="right-desc">
              <img src={Tag} alt="" />
            </div>
          </div>
        </div>
        <div className="indiv-card">
          <img className="prop-img" src={Property7} alt="" />
          <div className="absolute-desc">
            <div className="left-desc">
              <p className="ab-white">Digparken 25</p>
              <p className="ab-num">3.250.000</p>
            </div>
            <div className="right-desc">
              <img src={Tag} alt="" />
            </div>
          </div>
        </div>
        <div className="indiv-card">
          <img className="prop-img" src={Property8} alt="" />
          <div className="absolute-desc">
            <div className="left-desc">
              <p className="ab-white">Pilelokke 15</p>
              <p className="ab-num">2.050.000</p>
            </div>
            <div className="right-desc">
              <img src={Tag} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyCards;
