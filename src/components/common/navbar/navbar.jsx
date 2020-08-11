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
    <a
      href="https://www.doctissimo.fr/sante/aromatherapie/utilisation-des-huiles-essentielles/comment-utiliser-huiles-essentielles"
      target="_blank"
      rel="noreferrer"
    >
      How to
    </a>
    <NavLink to="/more">Liens utils</NavLink>
    <NavLink to="/about">A propos</NavLink>
  </nav>
);

export default Navbar;
