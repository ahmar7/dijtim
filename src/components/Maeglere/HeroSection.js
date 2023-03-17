import React from "react";
import { Team1, Team2, Team3, Team4 } from "../../utils/allImg";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="bg-section">
      <div className="container-width bg-blues">
        <div className="team-flex">
          <div className="single-agent">
            <div className="upper">
              <div className="dp">
                <img src={Team1} alt="" />
              </div>
              <div className="name-data">
                <p className="main-name">
                  Jacob <br className="desk-only" /> Jensen
                </p>
                <p className="tag-team clr">Maegler</p>
                <p className="tag-scoial">
                  <a href="">
                    <i class=" clr fa-brands fa-twitter"></i>
                  </a>
                  <a href="">
                    <i class=" clr fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i class=" clr fa-brands fa-linkedin-in"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="lower">
              <p>
                <i class="fa-solid fa-phone clr"></i> Kontor:{" "}
                <span className="light">26030312</span>
              </p>
              <p>
                <i class="fa-solid fa-mobile clr"></i> Kontor:{" "}
                <span className="light">26030312</span>
              </p>
            </div>
          </div>
          <div className="single-agent">
            <div className="upper">
              <div className="dp">
                <img src={Team2} alt="" />
              </div>
              <div className="name-data">
                <p className="main-name">
                  Jacob <br className="desk-only" /> Jensen
                </p>
                <p className="tag-team clr">Maegler</p>
                <p className="tag-scoial">
                  <a href="">
                    <i class=" clr fa-brands fa-twitter"></i>
                  </a>
                  <a href="">
                    <i class=" clr fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i class=" clr fa-brands fa-linkedin-in"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="lower">
              <p>
                <i class="fa-solid fa-phone clr"></i> Kontor:{" "}
                <span className="light">26030312</span>
              </p>
              <p>
                <i class="fa-solid fa-mobile clr"></i> Kontor:{" "}
                <span className="light">26030312</span>
              </p>
            </div>
          </div>
          <div className="single-agent">
            <div className="upper">
              <div className="dp">
                <img src={Team3} alt="" />
              </div>
              <div className="name-data">
                <p className="main-name">
                  Jacob <br className="desk-only" /> Jensen
                </p>
                <p className="tag-team clr">Maegler</p>
                <p className="tag-scoial">
                  <a href="">
                    <i class=" clr fa-brands fa-twitter"></i>
                  </a>
                  <a href="">
                    <i class=" clr fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i class=" clr fa-brands fa-linkedin-in"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="lower">
              <p>
                <i class="fa-solid fa-phone clr"></i> Kontor:{" "}
                <span className="light">26030312</span>
              </p>
              <p>
                <i class="fa-solid fa-mobile clr"></i> Kontor:{" "}
                <span className="light">26030312</span>
              </p>
            </div>
          </div>
          <div className="single-agent">
            <div className="upper">
              <div className="dp">
                <img src={Team4} alt="" />
              </div>
              <div className="name-data">
                <p className="main-name">
                  Jacob <br className="desk-only" /> Jensen
                </p>
                <p className="tag-team clr">Maegler</p>
                <p className="tag-scoial">
                  <a href="">
                    <i class=" clr fa-brands fa-twitter"></i>
                  </a>
                  <a href="">
                    <i class=" clr fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i class=" clr fa-brands fa-linkedin-in"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="lower">
              <p>
                <i class="fa-solid fa-phone clr"></i> Kontor:{" "}
                <span className="light">26030312</span>
              </p>
              <p>
                <i class="fa-solid fa-mobile clr"></i> Kontor:{" "}
                <span className="light">26030312</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
