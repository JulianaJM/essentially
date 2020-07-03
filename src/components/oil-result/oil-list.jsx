import React from "react";
import PropTypes from "prop-types";
import OilResult from "./oil-result";

import "./oils.scss";

const OilList = ({ oils }) => (
  <ul className="oils">
    {oils.map(({ _source }) => {
      const oil = { ..._source };
      return (
        <li className="oils__result" key={oil.name}>
          <OilResult oil={oil} />
        </li>
      );
    })}
  </ul>
);

OilList.propTypes = {
  oils: PropTypes.array.isRequired,
};

export default OilList;
