import React from 'react';
import PropTypes from 'prop-types';

const SymptomList = ({ symptoms, onChange }) => {
  return symptoms.map(symptom => (
    <div key={symptom}>
      <input onChange={onChange} id={symptom} type="checkbox" value={symptom} />
      <label htmlFor={symptom}>{symptom}</label>
    </div>
  ));
};

SymptomList.propTypes = {
  symptoms: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SymptomList;
