import React from "react";
import PropTypes from "prop-types";

import "./symptom.scss";

const Symptom = ({ symptoms, onChange }) => (
  <div className="symptom-chunk">
    {symptoms.map(symptom => {
      return (
        <div key={symptom} className="symptom-chunk_line">
          <input
            onChange={onChange}
            id={symptom}
            type="checkbox"
            value={symptom}
          />
          <label htmlFor={symptom}>{symptom}</label>
        </div>
      );
    })}
  </div>
);

Symptom.propTypes = {
  symptoms: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Symptom;
