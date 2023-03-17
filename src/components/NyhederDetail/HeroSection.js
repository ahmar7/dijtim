import React from "react";
import { NavLink } from "react-router-dom";
import { NewsPost, NewsPost2, NewsPost3 } from "../../utils/allImg";
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
              provident quaerat unde dist Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ullam, expedita id eos, voluptates temporibus,
              tenetur harum quod fuga minima accusantium aspernatur ipsam. Iste
              expedita iusto debitis. Consectetur eius assumenda vel rem, culpa
              ducimus porro quo hic illum unde. Sequi, exercitationem inventore
              blanditiis corrupti nemo iste perferendis commodi ea deserunt
              nulla itaque animi vero. Dolor qui voluptate alias architecto
              quibusdam! Pariatur, beatae officia? Cumque magnam nam quasi atque
              reiciendis eligendi dignissimos optio consequuntur voluptates
              nulla placeat iste, voluptas ipsum repellat eos similique eius.
              Soluta facilis vitae, iste praesentium quos officia ex iure ab. At
              voluptates quam itaque delectus perspiciatis labore quia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
