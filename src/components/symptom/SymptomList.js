import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SymptomList = ({ symptoms, onChange }) => (
  <div>
    {symptoms.map(symptom => (
      <Fragment key={symptom}>
        <input
          onChange={onChange}
          id={symptom}
          type="checkbox"
          value={symptom}
        />
        <label htmlFor={symptom}>{symptom}</label>
      </Fragment>
    ))}
  </div>
);

SymptomList.propTypes = {
  symptoms: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SymptomList;
