import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => (
  <nav className="navbar">
    <span>ESSENTIALY</span>
    <NavLink exact to="/">
      Accueil
    </NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/about">A propos</NavLink>
  </nav>
);

export default Navbar;
