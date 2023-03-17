import React from "react";
import "./GoogleMap.css";
const GoogleMap = () => {
  return (
    <div>
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4969564937!2d-78.01379880156674!3d42.728766211493934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2s!4v1679045232862!5m2!1sen!2s"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
