import React from "react";
import { NavLink } from "react-router-dom";
import { isMobileOnly } from "react-device-detect";

import "./navbar.scss";

const Navbar = () => (
  <nav className="navbar">
    {!isMobileOnly && <span>ESSENTIALY</span>}
    <NavLink exact to="/">
      Accueil
    </NavLink>
    <NavLink to="/index">Index des huiles</NavLink>
    <NavLink to="/about">A propos</NavLink>
  </nav>
);

export default Navbar;
