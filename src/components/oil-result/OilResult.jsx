import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const OilResult = ({ oil }) => {
  const { name, image, description } = oil;
  const newName = name.replace(/\s/g, "_");

  return (
    <Link className="tile" to={`/${newName}`}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
    </Link>
  );
};

OilResult.propTypes = {
  oil: PropTypes.object.isRequired,
};

export default OilResult;
