import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-items left">
        <li>Projects</li>
        <li>Merch</li>
      </ul>
      <div className="navbar-logo">WiND</div>
      <ul className="nav-items right">
        <li>Team</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
