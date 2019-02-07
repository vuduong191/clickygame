import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div>
      <div className="button-container">
        <div className="btn">
          <small>Your Score</small>
          <p>{props.score}</p>          
        </div>
        <div className="btn">
          <small>Top Score</small>
          <p>{props.topScore}</p>          
        </div>
      </div>      
      <div className="jumbotron jumbotron-fluid">
        <div className="overlay">
        </div>
        <div className="background-image">
        </div>    
        <div className="caption">
          <h1 className="display-4">Clicky Game</h1>
          <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
      </div>
    </div>       
  );
}

export default Navbar;
