import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./header.scss";

const Header = React.forwardRef((props, ref) => (
  <div className="header" ref={ref} tabIndex={-1}>
    <div className="header__title">
      <h1 className="sr-only">Essentially</h1>
      <div className="header__title__content">
        <button
          type="button"
          onClick={props.goBack}
          className={classNames("previous", {
            "is-active": props.shouldShowBackButton,
          })}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <Link to="/" className="logo" />
        <h2>
          Le moteur de recherche{" "}
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
