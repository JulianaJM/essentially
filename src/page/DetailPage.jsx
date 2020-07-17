import React, { lazy, Suspense, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import Loader from "../components/common/loader/Loader";
// import Recipe from "../components/recipe/Recipe";
import { searchByName } from "../services/elasticSearch";

import "./detail-page.scss";

const OilDetails = lazy(() => import("../components/oil-details/OilDetails"));

const DetailPage = ({ match }) => {
  const [oil, setOil] = useState(null);
  const [activeTabs, setActiveTabs] = useState(["health"]);

  useEffect(() => {
    if (isMobile) {
      setActiveTabs([]);
    }
  }, []);

  useEffect(() => {
    const { params } = match;
    const newName = params.name.replace(/_/g, " ");

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
          />

          {oil.recipes && (
            <>
              <button className="recette-btn" type="button">
                Recette
              </button>

              {/* <Recipe recipes={oil.recipes} /> */}
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
};
