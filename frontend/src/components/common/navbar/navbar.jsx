import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => (
  <div className="navbar">
    <span>ESSENTIALY</span>
    <NavLink exact to="/">
      Accueil
    </NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/about">A propos</NavLink>
  </div>
);

export default Navbar;
