import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const OilResult = ({ oil }) => {
  const { name, image, description } = oil;
  const newName = name.replace(/\s/g, "_");
  const imgUrl = `https://res.cloudinary.com/dvbd6z854/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1594298310/essentially/${image}`;
  return (
    <Link className="tile" to={`/${newName}`}>
      <h2>{name}</h2>
      <img data-src={imgUrl} alt={name} className="lazyload" />
      <p>{description}</p>
    </Link>
  );
};

OilResult.propTypes = {
  oil: PropTypes.object.isRequired,
};

export default OilResult;
