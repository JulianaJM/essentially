import React from "react";
import PropTypes from "prop-types";

import "./symptom.scss";

const SymptomList = ({ symptoms, onChange }) => {
  return (
    <div className="symptom">
      {symptoms.map(symptom => {
        return (
          <div key={symptom} className="symptom_line">
            <input
              onChange={onChange}
              id={symptom}
              type="checkbox"
              value={symptom}
            />
            <label htmlFor={symptom} title={symptom}>
              {symptom}
            </label>
          </div>
        );
      })}
    </div>
  );
};

SymptomList.propTypes = {
  symptoms: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SymptomList;
