import React from "react";
import {
  Property1,
  Property2,
  Property3,
  Property4,
  Property5,
  Property6,
  Property7,
  Property8,
  PropertyBlog,
  PropertyBlog2,
} from "../../utils/allImg";
import "./GalleryImages.css";
const GalleryImages = () => {
  return (
    <div className="gallery-main ">
      <div className="images-flex container-width">
        <div className="img-single">
          <img src={Property1} alt="" />
        </div>
        <div className="img-single">
          <img src={Property2} alt="" />
        </div>
        <div className="img-single">
          <img src={Property3} alt="" />
        </div>
        <div className="img-single">
          <img src={Property4} alt="" />
        </div>
        <div className="img-single">
          <img src={Property5} alt="" />
        </div>
        <div className="img-single">
          <img src={Property6} alt="" />
        </div>
        <div className="img-single">
          <img src={Property7} alt="" />
        </div>
        <div className="img-single">
          <img src={Property8} alt="" />
        </div>
        <div className="img-single">
          <img src={PropertyBlog2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
