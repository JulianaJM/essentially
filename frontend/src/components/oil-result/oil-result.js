import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const OilResult = ({ oil }) => {
  const { name, image, description } = oil;
  return (
    <Link to={`/${name}`}>
      <div className="oils__result">
        <div className="icon">
          <img src={image} alt={name} />
        </div>
        <div>
          <h2>{name}</h2>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

OilResult.propTypes = {
  oil: PropTypes.object.isRequired
};

export default OilResult;
