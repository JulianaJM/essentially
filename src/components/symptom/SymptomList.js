import React from 'react';
import PropTypes from 'prop-types';
import Symptom from './Symptom';

const SymptomList = ({ symptoms, onChange }) => {
  let list = [];
  let flag = false;
  return (
    <div>
      {symptoms.map((symptom, i) => {
        if (flag) {
          list = [];
          flag = false;
        }
        list.push(symptom);
        if (list.length === 50) {
          flag = true;
          return <Symptom key={i} symptoms={list} onChange={onChange} />;
        }
      })}
    </div>
  );
};

SymptomList.propTypes = {
  symptoms: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SymptomList;
