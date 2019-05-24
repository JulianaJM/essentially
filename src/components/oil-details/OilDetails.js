import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const OilDetails = ({ details, match }) => {
  const {
    params: { name }
  } = match;
  const { oils, oilsDetails } = details;
  const oil = oils.find(item => {
    const currentName = item.name;
    return currentName.match(name);
  });

  const oilDetails = oilsDetails.find(item => {
    const currentName = item.oil.toLowerCase();
    return currentName.match(name.toLowerCase());
  });
  return (
    <div className="oil-details">
      <img src={oil.picture} alt={oil.name} />
      <h3>{oil.name}</h3>
      <p>{oil.description}</p>
      <h3>Santé</h3>
      <p>{oilDetails.health.propertiesDesc}</p>
    </div>
  );
};

OilDetails.propTypes = {
  details: PropTypes.array.isRequired,
  match: PropTypes.object
};

export default withRouter(OilDetails);
