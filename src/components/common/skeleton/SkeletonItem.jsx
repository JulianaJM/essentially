import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./skeleton.scss";

const SkeletonItem = ({ style, className }) => (
  <div className={classNames("skeleton-item", className)} style={style} />
);

export default SkeletonItem;

SkeletonItem.defaultProps = {
  style: {},
  className: "",
};
SkeletonItem.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};
