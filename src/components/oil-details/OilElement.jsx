/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import Hightlight from "../common/hightlight/Hightlight";

const OilElement = ({ category, hightlight }) => {
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
      <p>
        <Hightlight hightlight={hightlight} content={category.propertiesDesc} />
      </p>
      <ul>
        {category.properties.map((property, index) => (
          <li key={index}>
            <Hightlight hightlight={hightlight} content={property} />
          </li>
        ))}
      </ul>
      {category.indicationsDesc && <p className="subtitle">Indications</p>}
      <p>
        <Hightlight
          hightlight={hightlight}
          content={category.indicationsDesc}
        />
      </p>
      <ul>
        {category.indications.map((property, index) => (
          <li key={index}>
            <Hightlight hightlight={hightlight} content={property} />
          </li>
        ))}
      </ul>
      {newSynergies.length > 0 && <p className="subtitle">Synergies</p>}
      <ul>
        {newSynergies.map((property, index) => (
          <li key={index}>
            <Hightlight hightlight={hightlight} content={property} />
          </li>
        ))}
      </ul>
    </div>
  );
};

OilElement.defaultProps = {
  hightlight: [],
};

OilElement.propTypes = {
  category: PropTypes.object.isRequired,
  hightlight: PropTypes.array,
};

export default OilElement;
