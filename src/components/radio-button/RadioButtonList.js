import React from 'react';
import RadioButton from './RadioButton';

const RadioButtonList = ({ items, onChange }) =>
  items.map(item => (
    <RadioButton key={item} id={item} label={item} onChange={onChange} />
  ));

export default RadioButtonList;
