import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.scss";

const SideNavbar = () => {
  const navEl = useRef(null);
  const menuBtnEl = useRef(null);

  const openNav = () => {
    navEl.current.style.width = "250px";
    document.getElementById("app").style.marginLeft = "250px";
    menuBtnEl.current.style.display = "none";
  };

  const closeNav = () => {
    navEl.current.style.width = "0";
    document.getElementById("app").style.marginLeft = "0";
    menuBtnEl.current.style.display = "block";
  };

  useEffect(() => {
    document.addEventListener(
      "click",
      event => {
        if (
          event.target.matches(".menuBtn") ||
          event.target.matches(".closebtn") ||
          event.target.matches(".sidenav")
        ) {
          // do nothing on right selectors
        } else if (navEl.current.style.width !== "0px") {
          // If the clicked element doesn't have the right selector
          closeNav();
        }

        // Don't follow the link
        event.preventDefault();
      },
      false
    );
  }, []);

  return (
    <>
      <nav className="sidenav" ref={navEl}>
        <button type="button" className="closebtn" onClick={closeNav}>
          &times;
        </button>
        <NavLink exact to="/">
          Accueil
        </NavLink>
        <NavLink to="/recipes">Recettes</NavLink>
        <NavLink to="/index">Index des huiles</NavLink>
        <NavLink to="/more">Liens utils</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>

      <button
        type="button"
        ref={menuBtnEl}
        className="menuBtn"
        onClick={openNav}
      >
        &#9776;
      </button>
    </>
  );
};

export default SideNavbar;
