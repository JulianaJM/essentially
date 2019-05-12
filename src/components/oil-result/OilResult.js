import React from 'react';
import PropTypes from 'prop-types';

const OilResult = ({ oil }) => {
  return (
    <div>
      <img src={oil.picture} alt={oil.name} />
      <h3>{oil.name}</h3>
      <p>{oil.description}</p>
      {/* <a href="#">recettes</a> */}
    </div>
  );
};

OilResult.propTypes = {
  oil: PropTypes.object.isRequired
};

export default OilResult;
