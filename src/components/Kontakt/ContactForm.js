import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div className="bg-section">
      <div className="container-width">
        <div className="contact-flex">
          <div className="contact-detail">
            <h3>Adresse</h3>
            <p className="location">
              <i class="fa-solid fa-location-dot"></i> stiory berf, 4600 koga
            </p>
            <div className="info-flex">
              <div className="info-left">
                <p>Kontakt information</p>
                <ul>
                  <li>
                    <i class="fa-solid fa-phone "></i> 23151502
                  </li>
                  <li>
                    <i class="fa-solid fa-mobile "></i> 66121202
                  </li>
                  <li>
                    <i class="fa-solid fa-envelope"></i> info@dithjem.dk
                  </li>
                </ul>
              </div>
              <div className="info-left">
                <p>Abningstider</p>
                <ul>
                  <li>
                    <i class="fa-solid fa-clock "></i> Man - fre : 06 til 20
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-clock "
                      style={{ visibility: "hidden" }}
                    ></i>{" "}
                    Lor - Son : 09 til 14
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Kontakt os</h3>
            <div className="input-form">
              <input type="text" placeholder="Navn*" />
              <input type="email" placeholder="Email*" />
              <input type="text" placeholder="tif" />
              <textarea type="text" rows="8" placeholder="Besked*" />

              <div className="con-btn">
                <button className="se-mere">Send besked</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
