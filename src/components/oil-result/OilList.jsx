import React from "react";
import PropTypes from "prop-types";
import OilResult from "./OilResult";

import "./oils.scss";

const OilList = ({ oils, hightlight }) => (
  <ul className="oils">
    {oils.map(({ _id, _source }) => {
      return (
        <li className="oils__result" key={_id}>
          <OilResult oil={{ ..._source }} hightlight={hightlight} />
        </li>
      );
    })}
  </ul>
);

OilList.propTypes = {
  oils: PropTypes.array.isRequired,
  hightlight: PropTypes.array.isRequired,
};

export default OilList;
