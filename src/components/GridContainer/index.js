import React from "react";
import "./style.css";

function GridContainer(props) {
  return <div className="grid-container">
  <div className="grid-body">
    {props.children}  
  </div>
  </div>;
}

export default GridContainer;
