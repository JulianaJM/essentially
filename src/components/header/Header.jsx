import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = React.forwardRef((props, ref) => (
  <div className="header" ref={ref} tabIndex={-1}>
    <div className="header__title">
      <h1 className="sr-only">Essentially</h1>
      <div className="header__title__content">
        {props.shouldShowBackButton && (
          <button type="button" onClick={props.goBack} className="previous">
            &#8249;
          </button>
        )}
        <Link to="/">
          <img src="/assets/images/logo.png" alt="logo" />
        </Link>
        <h2>
          Bienvenue sur ton moteur de recherche{" "}
          <span className="bold-green">{" d'huiles essentielles "} </span>
        </h2>
      </div>
    </div>
    {props.children}
  </div>
));

Header.defaultProps = {
  children: null,
};

Header.displayName = "Header";

Header.propTypes = {
  children: PropTypes.node,
  goBack: PropTypes.func.isRequired,
  shouldShowBackButton: PropTypes.bool.isRequired,
};

export default Header;
