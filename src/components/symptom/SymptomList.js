import React from 'react';
import PropTypes from 'prop-types';
import SymptomChunk from './SymptomChunk';

const SymptomList = ({ symptoms, onChange }) => {
  let chunkList = [];
  let isMaxChunk = false;
  return (
    <div className="symptom">
      {symptoms.map((symptom, i) => {
        if (isMaxChunk) {
          chunkList = [];
          isMaxChunk = false;
        }
        chunkList.push(symptom);
        if (chunkList.length === 15) {
          isMaxChunk = true;
          return (
            <SymptomChunk key={i} symptoms={chunkList} onChange={onChange} />
          );
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
