import React from "react";
import "./PageHeader.css";
const PageHeader = (props) => {
  return (
    <div className="page-head">
      <div className="page-overlay">
        <div className="container-width flex-page">
          <h3>{props.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
