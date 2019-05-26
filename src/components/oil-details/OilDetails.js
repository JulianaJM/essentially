import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import OilElement from './oilElement';

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
  const { health = {}, mood = {}, beauty = {}, precautions } = oilDetails;
  return (
    <div className="oil-details">
      <img src={oil.picture} alt={oil.name} />
      <h3>{oil.name}</h3>
      <p>{oil.description}</p>

      {health.propertiesDesc && <h3>En Santé</h3>}
      <OilElement category={health} />

      {mood.propertiesDesc && <h3>En bien-être</h3>}
      <OilElement category={mood} />

      {beauty.propertiesDesc && <h3>En beauté</h3>}
      <OilElement category={beauty} />

      {precautions.length > 0 && <strong>Précautions</strong>}
      <ul>
        {precautions.map((precaution, i) => (
          <li key={i}>{precaution}</li>
        ))}
      </ul>
    </div>
  );
};

OilDetails.propTypes = {
  details: PropTypes.object.isRequired,
  match: PropTypes.object
};

export default withRouter(OilDetails);
