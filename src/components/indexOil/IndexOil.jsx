import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getOils } from "../../services/elasticSearch";
import { replaceSpacebyUnderscore } from "../../utils/replace";

import "./index-oil.scss";
import { scrollTop } from "../../utils/scroll";

const IndexOil = () => {
  const [oils, setOils] = useState([]);

  useEffect(() => {
    scrollTop();
    getOils().then(res => {
      const newRes = res.data.hits.map(r => {
        return { id: r._id, name: r._source.name };
      });

      const newOils = newRes.sort((a, b) => a.name.localeCompare(b.name));

      setOils(newOils);
    });
  }, []);

  return (
    <ul className="index-oil">
      {oils.map(({ id, name }) => {
        const url = replaceSpacebyUnderscore(name);

        return (
          <li key={id}>
            <Link className="index-oil__link" to={url}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default IndexOil;
