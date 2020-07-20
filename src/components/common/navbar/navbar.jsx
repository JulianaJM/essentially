import React from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => (
  <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />

      <span />
      <span />
      <span />

      <ul id="menu">
        <Link exact to="/">
          <li>Home</li>
        </Link>

        <Link to="/contact">
          <li>Contact</li>
        </Link>

        <Link to="/about">
          <li>A propos</li>
        </Link>
      </ul>
    </div>
  </nav>
);

export default Navbar;
