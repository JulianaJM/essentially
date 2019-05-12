import React from 'react';
import PropTypes from 'prop-types';

const SymptomList = ({ symptoms, onChange }) => {
  return symptoms.map(symptom => (
    <div key={symptom.id}>
      <input
        onChange={onChange}
        id={symptom.id}
        type="checkbox"
        value={symptom.name}
      />
      <label htmlFor={symptom.id}>{symptom.name}</label>
    </div>
  ));
};

SymptomList.propTypes = {
  symptoms: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SymptomList;
