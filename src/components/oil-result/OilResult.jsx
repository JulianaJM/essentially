import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { replaceSpacebyUnderscore } from "../../utils/replace";

const OilResult = ({ oil, hightlight }) => {
  const { name, image, description } = oil;
  const newName = replaceSpacebyUnderscore(name);
  const imgUrl = `https://res.cloudinary.com/dvbd6z854/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1594298310/essentially/${image}`;
  const thumbnail = `https://res.cloudinary.com/dvbd6z854/image/upload/c_thumb,w_200,g_face/v1594298310/essentially/${image}`;
  return (
    <Link className="tile" to={{ pathname: `/${newName}`, hightlight }}>
      <div className="tile-content">
        <div
          className="lazyload tile-image"
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-src={imgUrl}
        />
        {/* <img data-src={imgUrl} alt={name} className="lazyload" /> */}
        <div className="tile-desc">
          <h2 className="title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

OilResult.propTypes = {
  oil: PropTypes.object.isRequired,
  hightlight: PropTypes.array.isRequired,
};

export default OilResult;
