import React from "react";
import { Marker, PropertyBlog } from "../../utils/allImg";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="blog-bg">
      <div className="blog-hero container-width">
        <div className="img-flex">
          <img className="property-bh" src={PropertyBlog} alt="" />
          <div className="property-contact">
            <h1 className="property-heading">Hvasdej 30</h1>
            <p className="loc">
              <i class="fa-solid fa-location-dot"></i> stiory berf, 4600 koga
            </p>
            <p className="ab-num">1.825.000</p>

            <h1 className="property-heading my">Hormere om denne</h1>
            <div className="form">
              <div className="inline-input">
                <input type="text" placeholder="Navn" />
                <input type="Email" placeholder="Email" />
              </div>
              <textarea
                className="text-area"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="button-besked">
              <button>Send besked</button>
            </div>
          </div>
        </div>
        <div className="hero-desc">
          <h3 className="gate">Beskrvelse</h3>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            aspernatur dolore corrupti ea amet beatae asperiores vel porro
            cupiditate dicta quam voluptatem nam reprehenderit, nesciunt eos,
            delectus quis. Voluptatibus, voluptatum. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Tempore voluptas placeat animi ab
            consequatur, officiis pariatur omnis quos illum! Odio pariatur et
            ipsum doloremque. Ratione odio sint officia expedita quam quia
            voluptas minus odit rem, sit delectus consequuntur tempora autem
            quas, voluptatum a placeat nostrum voluptatem laboriosam, laborum
            quasi adipisci animi recusandae. Blanditiis ipsum ullam fugit vero
            voluptatibus, minus nihil illo vitae corrupti odit, impedit veniam
            incidunt voluptatum, quae enim debitis vel dolore neque ex! Minima
            iusto obcaecati quia praesentium, magnam libero quibusdam natus aut
            consectetur ratione, cum ipsam eaque nemo illum quidem, consequuntur
            ipsa possimus atque ab fugiat expedita!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
