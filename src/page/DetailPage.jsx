import React, { lazy, Suspense, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

import Loader from "../components/common/loader/Loader";
import { searchByName } from "../services/elasticSearch";
import { replaceUnderscorebySpace } from "../utils/replace";
import { scrollTop } from "../utils/scroll";

import "./detail-page.scss";

const OilDetails = lazy(() => import("../components/oil-details/OilDetails"));

const DetailPage = ({ match, location }) => {
  const [oil, setOil] = useState(null);
  const [activeTabs, setActiveTabs] = useState(["health"]);
  const { params } = match;

  useEffect(() => {
    scrollTop();
    if (isMobile) {
      setActiveTabs([]);
    }
  }, []);

  useEffect(() => {
    const newName = replaceUnderscorebySpace(params.name);

    searchByName(newName).then(res => {
      setOil(res.data[0]._source);
    });
  }, [match.params.name]);

  const handleToggle = e => {
    const currentTab = e.currentTarget.id;
    if (!activeTabs.includes(currentTab)) {
      setActiveTabs([...activeTabs, currentTab]);
    } else {
      setActiveTabs(activeTabs.filter(f => f !== currentTab));
    }
  };

  return (
    <Suspense fallback={<Loader />}>
      {oil && (
        <>
          <OilDetails
            activeTabs={activeTabs}
            oil={oil}
            onToggle={handleToggle}
            hightlight={location.hightlight}
          />

          {oil.recipes && oil.recipes.recipesTitle.length > 0 && (
            <>
              <Link
                // to={{ pathname: "/recipe", recipes: oil.recipes }}
                to={`/${params.name}/recipe`}
                className="recette-btn"
                type="button"
              >
                Idées recette
              </Link>
            </>
          )}
        </>
      )}
    </Suspense>
  );
};

export default withRouter(DetailPage);

DetailPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
