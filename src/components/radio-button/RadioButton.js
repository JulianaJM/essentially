import React from 'react';
import PropTypes from 'prop-types';

import './radio-button.scss';

const RadioButton = ({ id, label, onChange }) => {
  return (
    <label htmlFor={id}>
      <input
        type="radio"
        name="searchButton"
        value={label}
        id={id}
        className="form-radio"
        // checked={isChecked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioButton;
