import React from "react";
import PropTypes from "prop-types";
/* import health from '../../assets/images/health.jpeg';
import mood from '../../assets/images/mood.jpg';
import beauty from '../../assets/images/beauty.jpeg'; */

import RadioButton from "./RadioButton";
const images = [
  /* health, mood, beauty */
];
const RadioButtonList = ({ items, onChange }) => (
  <div className="radio-wrapper">
    {items.map((item, i) => (
      <RadioButton
        key={item}
        id={item}
        label={item}
        onChange={onChange}
        image={images[i]}
      />
    ))}
  </div>
);

RadioButtonList.propTypes = {
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButtonList;
