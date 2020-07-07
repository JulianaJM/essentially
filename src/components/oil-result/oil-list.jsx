/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import OilResult from "./oil-result";

import "./oils.scss";

const OilList = ({ oils }) => (
  <ul className="oils">
    {oils.map(({ _source }, index) => {
      const oil = { ..._source };
      return (
        <li className="oils__result" key={index}>
          <OilResult oil={oil} />
        </li>
      );
    })}
  </ul>
);

OilList.propTypes = {
  oils: PropTypes.array.isRequired,
};

export default React.memo(OilList);
