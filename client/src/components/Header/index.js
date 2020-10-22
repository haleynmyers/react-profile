import React, { Component } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Haley Myers
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to={process.env.PUBLIC_URL + "/"} className="nav-link">Home</Link>
          <Link to={process.env.PUBLIC_URL + "/contact"} className="nav-link">Contact</Link>
          <Link to={process.env.PUBLIC_URL + "/portfolio"} className="nav-link">Portfolio</Link>
          <Link to={process.env.PUBLIC_URL + "/resume"} className="nav-link">Resume</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
