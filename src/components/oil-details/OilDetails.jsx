/* eslint-disable react/no-array-index-key */ // temporary

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import OilElement from "./OilElement";
import { searchByName } from "../../services/elasticSearch";

import "./oil-details.scss";
import Collapse from "../common/collapse/Collapse";

const OilDetails = ({ match }) => {
  const [oil, setOil] = useState(null);
  const [activeTabs, setActiveTabs] = useState([]);

  useEffect(() => {
    const { params } = match;
    const newName = params.name.replace(/_/g, " ");

    searchByName(newName).then(res => {
      setOil(res.data[0]._source);
    });
  }, [match.params.name]);

  const onToggle = e => {
    const currentTab = e.currentTarget.id;
    if (!activeTabs.includes(currentTab)) {
      setActiveTabs([...activeTabs, currentTab]);
    } else {
      setActiveTabs(activeTabs.filter(f => f !== currentTab));
    }
  };

  return (
    oil && (
      <div className="oil-details">
        <div className="oil-img">
          <img
            data-src={`https://res.cloudinary.com/dvbd6z854/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1594298310/essentially/${oil.image}`}
            alt={oil.name}
            className="lazyload"
          />
        </div>

        <div className="oil-details__content">
          <h2 className="oil-title">{oil.name}</h2>

          <p className="detail-desc">{oil.description}</p>

          {oil.health.propertiesDesc && (
            <button
              id="health"
              className="detail-btn"
              onClick={onToggle}
              type="button"
            >
              <Collapse
                title="En Santé"
                content={<OilElement category={oil.health} />}
                isOpen={activeTabs.includes("health")}
              />
            </button>
          )}

          {oil.mood.propertiesDesc && (
            <button
              id="mood"
              className="detail-btn"
              onClick={onToggle}
              type="button"
            >
              <Collapse
                title="En bien-être"
                content={<OilElement category={oil.mood} />}
                isOpen={activeTabs.includes("mood")}
              />
            </button>
          )}

          {oil.beauty.propertiesDesc && (
            <button
              id="beauty"
              className="detail-btn"
              onClick={onToggle}
              type="button"
            >
              <Collapse
                title="En beauté"
                content={<OilElement category={oil.beauty} />}
                isOpen={activeTabs.includes("beauty")}
              />
            </button>
          )}

          {oil.precautions.length > 0 && (
            <div className="precaution">
              <p className="precaution__subtitle">Précautions</p>
              <ul className="precaution__content">
                {oil.precautions.map((precaution, index) => (
                  <li key={index}>{precaution}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  );
};

OilDetails.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(OilDetails);
