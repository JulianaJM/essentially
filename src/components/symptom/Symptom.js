import React from 'react';
import PropTypes from 'prop-types';

const Symptom = ({ symptoms, onChange }) => (
  <div>
    {symptoms.map(symptom => {
      return (
        <div key={symptom}>
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
