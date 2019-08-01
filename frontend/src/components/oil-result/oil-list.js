import React from 'react';
import PropTypes from 'prop-types';
import OilResult from './oil-result';

import './oils.scss';

const OilList = ({ oils }) => (
  <div className="oils">
    {oils.map(({ _source }) => {
      const oil = { ..._source };
      return <OilResult key={oil.name} oil={oil} />;
    })}
  </div>
);

OilList.propTypes = {
  oils: PropTypes.array.isRequired
};

export default OilList;
