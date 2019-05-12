import React from 'react';
import PropTypes from 'prop-types';

import RadioButton from './RadioButton';

const RadioButtonList = ({ items, onChange }) =>
  items.map(item => (
    <RadioButton key={item} id={item} label={item} onChange={onChange} />
  ));

RadioButtonList.propTypes = {
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioButtonList;
