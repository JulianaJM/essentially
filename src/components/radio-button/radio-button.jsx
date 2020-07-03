import React from "react";
import PropTypes from "prop-types";

import "./radio-button.scss";

const RadioButton = ({ id, label, image, onChange }) => {
  return (
    <div className="form-radio">
      <input
        type="radio"
        name="radioBtn"
        value={label}
        id={id}
        onChange={onChange}
      />
      <label htmlFor={id}>
        <img src={image} alt={label} />
      </label>
      <p>{label}</p>
    </div>
  );
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
};

export default RadioButton;
