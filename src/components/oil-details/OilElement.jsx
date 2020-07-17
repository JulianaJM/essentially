/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";

const OilElement = ({ category }) => {
  // reformat synergies tab
  let newSynergies = [];
  if (category.synergies.length > 0) {
    if (category.synergies.length === 1) {
      newSynergies = category.synergies[0].split("/");
    } else {
      newSynergies = category.synergies;
    }
  }

  return (
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
      {newSynergies.length > 0 && <p className="subtitle">Synergies</p>}
      <ul>
        {newSynergies.map((property, index) => (
          <li key={index}>{property}</li>
        ))}
      </ul>
    </div>
  );
};

OilElement.propTypes = {
  category: PropTypes.object.isRequired,
};

export default OilElement;
