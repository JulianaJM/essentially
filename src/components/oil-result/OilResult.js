import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OilResult = ({ oil }) => {
  return (
    <div className="oils_card">
      <Link to={`/${oil.name}`}>
        <img src={oil.picture} alt={oil.name} />
        <h3>{oil.name}</h3>
        <p className="truncate">{oil.description}</p>
      </Link>
    </div>
  );
};

OilResult.propTypes = {
  oil: PropTypes.object.isRequired
};

export default OilResult;
