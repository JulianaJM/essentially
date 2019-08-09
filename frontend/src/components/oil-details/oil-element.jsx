import React from "react";
import PropTypes from "prop-types";
import getUniqueId from "../../services/uuid";

const OilElement = ({ category }) => (
  <div>
    <p>{category.propertiesDesc}</p>
    <ul>
      {category.properties.map(property => (
        <li key={getUniqueId()}>{property}</li>
      ))}
    </ul>
    {category.indicationsDesc && <strong>Indications</strong>}
    <p>{category.indicationsDesc}</p>
    <ul>
      {category.indications.map(property => (
        <li key={getUniqueId()}>{property}</li>
      ))}
    </ul>
    {category.synergies.length > 0 && <strong>Synergies</strong>}
    <ul>
      {category.synergies.map(property => (
        <li key={getUniqueId()}>{property}</li>
      ))}
    </ul>
  </div>
);

OilElement.propTypes = {
  category: PropTypes.object.isRequired,
};

export default OilElement;
