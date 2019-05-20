import React from 'react';
import PropTypes from 'prop-types';
import OilResult from './OilResult';

const OilList = ({ oils }) => (
  <div>
    {oils.map(oil => (
      <OilResult key={oil.name} oil={oil} />
    ))}
  </div>
);

OilList.propTypes = {
  oils: PropTypes.array.isRequired
};

export default OilList;
