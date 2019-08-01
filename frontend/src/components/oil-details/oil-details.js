import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import OilElement from "./oil-element";
import ElasticSearchService from "../../services/elasticSearch";

import "./oil-details.scss";

const OilDetails = ({ match }) => {
  const [oil, setOil] = useState(null);

  useEffect(() => {
    const { params } = match;
    ElasticSearchService.searchByName(params.name)
      .then(res => {
        setOil(res.data[0]._source);
      })
      .catch(err => {
        console.log(err);
      });
  }, [match.params.name]);

  return (
    oil && (
      <div className="oil-details">
        <img src={oil.image} alt={oil.name} />
        <div className="oil-details__content">
          <h3>{oil.name}</h3>
          <p>{oil.description}</p>
          {oil.health.propertiesDesc && <h3>En Santé</h3>}
          <OilElement category={oil.health} />
          {oil.mood.propertiesDesc && <h3>En bien-être</h3>}
          <OilElement category={oil.mood} />
          {oil.beauty.propertiesDesc && <h3>En beauté</h3>}
          <OilElement category={oil.beauty} />
          {oil.precautions.length > 0 && <strong>Précautions</strong>}
          <ul>
            {oil.precautions.map((precaution, i) => (
              <li key={i}>{precaution}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

OilDetails.propTypes = {
  match: PropTypes.object
};

export default withRouter(OilDetails);
