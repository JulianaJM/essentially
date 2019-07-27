import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OilResult = ({ oil }) => {
  const { name, image, description } = oil;
  return (
    <div className="oils_card">
      <Link to={`/${name}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p className="truncate">{description}</p>
      </Link>
    </div>
  );
};

OilResult.propTypes = {
  oil: PropTypes.object.isRequired
};

export default OilResult;
