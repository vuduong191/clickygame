import React from "react";
import "./style.css";

function PicCard(props) {
  return (
    <div className="card" data-id = {props.id} data-click={props.click} style={{backgroundImage:`url(${props.imgUrl})`}}>
    </div>
  );
}

export default PicCard;
