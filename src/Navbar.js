import React from "react";
import logo from "./logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="fright">
          <img src={logo} className="Nav-logo" width=" 80px" alt="logo_petit" />
        </div>
        <div className="hovering">
          <a href="/#">About us</a>
        </div>
        <div className="hovering">
          <a href="/#">Career</a>
        </div>
        <div className="hovering dropdown-btn">
          <a href="/#">Bootcamps</a>
          <ul className="submenu">
            <li>
              <a href="/#">Mearn Stack</a>
            </li>
            <li>
              <a href="/#">Mean Stack</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
