import React from "react";
import PropTypes from "prop-types";

const OilElement = ({ category }) => (
  <div>
    <p>{category.propertiesDesc}</p>
    <ul>
      {category.properties.map((property, i) => (
        <li key={i}>{property}</li>
      ))}
    </ul>
    {category.indicationsDesc && <strong>Indications</strong>}
    <p>{category.indicationsDesc}</p>
    <ul>
      {category.indications.map((property, i) => (
        <li key={i}>{property}</li>
      ))}
    </ul>
    {category.synergies.length > 0 && <strong>Synergies</strong>}
    <ul>
      {category.synergies.map((property, i) => (
        <li key={i}>{property}</li>
      ))}
    </ul>
  </div>
);

OilElement.propTypes = {
  category: PropTypes.object.isRequired
};

export default OilElement;
