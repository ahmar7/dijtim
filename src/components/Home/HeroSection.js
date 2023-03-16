import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Slider1, Slider2, Slider3 } from "../../utils/allImg";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="carousel-area">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2000}
      >
        <div>
          <img src={Slider1} />
        </div>
        <div>
          <img src={Slider2} />
        </div>
        <div>
          <img src={Slider3} />
        </div>
      </Carousel>
      <div className="sog ">SOG</div>
    </div>
  );
};

export default HeroSection;
