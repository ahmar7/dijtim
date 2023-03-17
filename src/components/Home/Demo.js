import React from "react";
import { Demo1, Demo2, Demo3 } from "../../utils/allImg";
import "./Demo.css";
const Demo = () => {
  return (
    <div className="demo-main">
      <div className="overlay-bg">
        <div className="container-width demo-detail">
          <h2 className="velco">Velkommen</h2>
          <h1 className="demo-head">Saelg din bolig hos os</h1>
          <p className="demo-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            omnis sequi dolorem natus sunt.
          </p>
          <div className="demo-icos">
            <div className="indiv-demo">
              <img src={Demo1} alt="" />
              <h2 className="velco green">Tilmeld</h2>
              <p className="demo-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="indiv-demo">
              <img src={Demo2} alt="" />
              <h2 className="velco green">Udfyld detaljer om din bolig</h2>
              <p className="demo-desc"></p>
            </div>
            <div className="indiv-demo">
              <img src={Demo3} alt="" />
              <h2 className="velco green">Det var det!</h2>
              <p className="demo-desc">
                Lorem ipsum, dolor sit amet consectetur
              </p>
            </div>
          </div>
          <div className="demo-btn">
            <button>Opret din bolig</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
