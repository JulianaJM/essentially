/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Proptypes from "prop-types";
import classNames from "classnames";

import "./collapse.scss";

const Collapse = ({ title, content, isOpen }) => {
  return (
    <div className="wrap-collabsible">
      {/* <input id="collapsible" className="toggle" type="checkbox" /> */}
      <div className={classNames("toggle", { isOpen })} />

      <label className="lbl-toggle">{title}</label>
      <div className="collapsible-content">
        {isOpen && <div className="content-inner">{content}</div>}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: Proptypes.node.isRequired,
  content: Proptypes.node.isRequired,
  isOpen: Proptypes.bool.isRequired,
};

export default Collapse;
