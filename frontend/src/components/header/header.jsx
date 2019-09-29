import React from "react";
import PropTypes from "prop-types";

import "./header.scss";

const Header = React.forwardRef((props, ref) => (
  <div className="header" ref={ref} tabIndex={-1}>
    <div className="header__title">
      <h1 id="logo">Essentially</h1>
      <img src="/assets/images/logo.png" alt="logo" />
      <h2>Bienvenue sur ton moteur de recherche {" d'huiles "}essentielles</h2>
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
};

export default Header;
