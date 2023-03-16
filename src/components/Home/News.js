import React from "react";
import { News1, News2, Plus } from "../../utils/allImg";
import "./News.css";
const News = () => {
  return (
    <div className="news-main container-width">
      <h1 className="sid">Sidste nyt</h1>
      <div className="news-flex">
        <div className="news-indiv">
          <img className="ne-se" src={News1} alt="" />
          <div className="news-detail">
            <h3 className="news-area">Find studiebolg</h3>
            <p className="news-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              ab sit, sunt aspernatur fugiat tempora eveniet
            </p>
            <a href="" className="more-btn">
              SE MERE <img src={Plus} alt="" />
            </a>
          </div>
        </div>
        <div className="news-indiv">
          <img className="ne-se" src={News2} alt="" />
          <div className="news-detail">
            <h3 className="news-area">
              Hvad er en <br /> tilstandsrapport?
            </h3>
            <p className="news-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              ab sit, sunt aspernatur fugiat tempora eveniet
            </p>
            <a href="" className="more-btn">
              SE MERE <img src={Plus} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
