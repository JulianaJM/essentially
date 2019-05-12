import React from 'react';
import PropTypes from 'prop-types';

const OilResult = ({ oil }) => {
  return (
    <div>
      <img src={oil.picture} alt={oil.name} />
      <p>nom : {oil.name}</p>
      <p>description : {oil.description}</p>
      {/* <a href="#">recettes</a> */}
    </div>
  );
};

OilResult.propTypes = {
  oil: PropTypes.object.isRequired
};

export default OilResult;
