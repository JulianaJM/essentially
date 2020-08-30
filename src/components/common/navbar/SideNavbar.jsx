import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { isMobileOnly } from "react-device-detect";
import focusTrap from "focus-trap-js";

import "./navbar.scss";

const SideNavbar = () => {
  const navEl = useRef(null);
  const menuBtnEl = useRef(null);
  const [tabindex, setTabindex] = useState(-1);

  const openNav = () => {
    // disable scroll
    document.body.style.overflow = "hidden";
    document.querySelector("html").scrollTop = window.scrollY;

    // enable tabindex on open nav
    setTabindex(0);
    if (isMobileOnly) {
      navEl.current.style.width = "100vw";
      navEl.current.style.opacity = "0.9";
    } else {
      navEl.current.style.width = "300px";
      document.getElementById("app").style.marginLeft = "250px"; // push content to letf
      document.getElementById("overlay").classList.add("overlay");
    }
    navEl.current.focus();
    menuBtnEl.current.style.display = "none";
  };

  const closeNav = () => {
    // enable scroll
    document.body.style.overflow = null;

    // disable tabindex on close nav
    setTabindex(-1);

    navEl.current.style.width = "0";
    document.getElementById("app").style.marginLeft = "0";
    document.getElementById("overlay").classList.remove("overlay");
    menuBtnEl.current.style.display = "block";
  };

  useEffect(() => {
    document.addEventListener(
      "click",
      event => {
        if (
          event.target.matches(".menuBtn") ||
          event.target.matches(".closebtn") ||
          event.target.matches(".sidenav") ||
          event.target.matches(".more a")
        ) {
          // do nothing on right selectors
        } else if (
          navEl.current.style.width !== "" &&
          navEl.current.style.width !== "0px"
        ) {
          // If the clicked element doesn't have the right selector
          closeNav();

          // Don't follow the link
          event.preventDefault();
        }
      },
      false
    );
  }, []);

  useEffect(() => {
    const handleKeyEvent = event => {
      if (
        navEl.current.style.width !== "" &&
        navEl.current.style.width !== "0px"
      ) {
        focusTrap(event, navEl.current);
      }
    };
    document.addEventListener("keydown", handleKeyEvent);
    return () => {
      document.removeEventListener("keydown", handleKeyEvent);
    };
  }, [navEl]);

  return (
    <>
      <nav className="sidenav" ref={navEl} tabIndex={-1}>
        <button type="button" className="closebtn" onClick={closeNav}>
          <span className="sr-only">Fermer le menu</span>
          <span aria-hidden>&times;</span>
        </button>
        <NavLink exact to="/" tabIndex={tabindex}>
          Accueil
        </NavLink>
        <NavLink to="/recipes" tabIndex={tabindex}>
          Recettes
        </NavLink>
        <NavLink to="/index" tabIndex={tabindex}>
          Index des huiles
        </NavLink>
        <NavLink to="/more" tabIndex={tabindex}>
          Liens utiles
        </NavLink>
        <NavLink to="/about" tabIndex={tabindex}>
          A propos
        </NavLink>
      </nav>

      <button
        type="button"
        ref={menuBtnEl}
        className="menuBtn"
        onClick={openNav}
        aria-label="Ouvrir le menu"
      >
        &#9776;
      </button>
    </>
  );
};

export default SideNavbar;
