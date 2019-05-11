import React from 'react';

const SymptomList = ({ symptoms }) => {
  return symptoms.map(symptom => (
    <div key={symptom.id}>
      <input
        // onChange={this.handleChange}
        id={symptom.id}
        type="checkbox"
        // checked={this.state.isChecked}
      />
      <label htmlFor={symptom.id}>{symptom.name}</label>
    </div>
  ));
};

export default SymptomList;
