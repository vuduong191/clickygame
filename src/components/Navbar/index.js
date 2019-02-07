import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <span>This is Score: {props.score}</span>
          </li>
          <li className="nav-item active">
            <span>This is Top Score: {props.topScore}</span>
          </li>        
        </ul>        
      </nav>
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
