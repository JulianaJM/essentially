/* eslint-disable react/no-array-index-key */ // temporary
import React from "react";
import PropTypes from "prop-types";

const OilElement = ({ category }) => (
  <div>
    <p>{category.propertiesDesc}</p>
    <ul>
      {category.properties.map((property, index) => (
        <li key={index}>{property}</li>
      ))}
    </ul>
    {category.indicationsDesc && <p className="subtitle">Indications</p>}
    <p>{category.indicationsDesc}</p>
    <ul>
      {category.indications.map((property, index) => (
        <li key={index}>{property}</li>
      ))}
    </ul>
    {category.synergies.length > 0 && <p className="subtitle">Synergies</p>}
    <ul>
      {category.synergies.map((property, index) => (
        <li key={index}>{property}</li>
      ))}
    </ul>
  </div>
);

OilElement.propTypes = {
  category: PropTypes.object.isRequired,
};

export default OilElement;
