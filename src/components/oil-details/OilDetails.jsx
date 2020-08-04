/* eslint-disable react/no-array-index-key */ // temporary

import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import OilElement from "./OilElement";
import Collapse from "../common/collapse/Collapse";
import Hightlight from "../common/hightlight/Hightlight";
import HealthIcon from "../../assets/icons/Health";
import BeautyIcon from "../../assets/icons/Beauty";
import MoodIcon from "../../assets/icons/Mood";
import KitchenIcon from "../../assets/icons/Kitchen";

import "./oil-details.scss";

const OilDetails = ({ activeTabs, oil, onToggle, hightlight }) =>
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
        <p className="detail-desc">
          <Hightlight hightlight={hightlight} content={oil.description} />
        </p>
        {oil.utilisations && oil.utilisations.length > 0 && (
          <div className="oil-utilisation">
            <p className="sr-only">Utilisations</p>
            <ul>
              {oil.utilisations.map((utilisation, index) => (
                <li key={index}>{utilisation}</li>
              ))}
            </ul>
          </div>
        )}
        {oil.ideal.length > 0 && (
          <div className="oil-ideal">
            <p className="oil-ideal__desc">Idéal pour : </p>
            <ul>
              {oil.ideal.map((ide, index) => (
                <li key={index}>
                  <Hightlight hightlight={hightlight} content={ide} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {oil.health.propertiesDesc && (
          <button
            id="health"
            className="detail-btn"
            onClick={onToggle}
            type="button"
          >
            <Collapse
              title="En Santé"
              icon={<HealthIcon width="60px" height="40px" />}
              content={
                <OilElement category={oil.health} hightlight={hightlight} />
              }
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
              title="En Bien-être"
              icon={<MoodIcon />}
              content={
                <OilElement category={oil.mood} hightlight={hightlight} />
              }
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
              title="En Beauté"
              icon={<BeautyIcon />}
              content={
                <OilElement category={oil.beauty} hightlight={hightlight} />
              }
              isOpen={activeTabs.includes("beauty")}
            />
          </button>
        )}
        {oil.kitchen.details.length > 0 && (
          <button
            id="kitchen"
            className="detail-btn"
            onClick={onToggle}
            type="button"
          >
            <Collapse
              title="En Cuisine"
              content={
                <div>
                  {/* <p>{oil.kitchen.kitchenDesc}</p> */}
                  {/* {oil.kitchen.details && ( */}
                  {/* <h3>Utilisations</h3> */}
                  <ul>
                    {oil.kitchen.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  {/* )} */}
                </div>
              }
              icon={<KitchenIcon />}
              isOpen={activeTabs.includes("kitchen")}
            />
          </button>
        )}
        {oil.precautions.length > 0 && (
          <div className="precaution">
            <p className="precaution__subtitle">
              <FontAwesomeIcon icon={faExclamationTriangle} /> Précautions
            </p>
            <ul className="precaution__content">
              {oil.precautions.map((precaution, index) => (
                <li key={index}>{precaution}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );

OilDetails.defaultProps = {
  hightlight: [],
};

OilDetails.propTypes = {
  oil: PropTypes.object.isRequired,
  activeTabs: PropTypes.array.isRequired,
  hightlight: PropTypes.array,
  onToggle: PropTypes.func.isRequired,
};

export default OilDetails;
