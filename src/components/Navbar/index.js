import React from "react";
import "./style.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/savedarticles">Saved Articles<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/savedarticles">Saved Articles<span className="sr-only">(current)</span></a>
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
