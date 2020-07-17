import React, { lazy, Suspense, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import Loader from "../components/common/loader/Loader";
import { searchByName } from "../services/elasticSearch";
import { replaceUnderscorebySpace } from "../utils/replace";
import { scrollTop } from "../utils/scroll";

const Recipe = lazy(() => import("../components/recipe/Recipe"));

const RecipePage = ({ match }) => {
  const [oil, setOil] = useState(null);
  const [activeTabs, setActiveTabs] = useState([""]);
  const { params } = match;

  const handleToggle = e => {
    const currentTab = e.currentTarget.id;
    if (!activeTabs.includes(currentTab)) {
      setActiveTabs([...activeTabs, currentTab]);
    } else {
      setActiveTabs(activeTabs.filter(f => f !== currentTab));
    }
  };

  useEffect(() => {
    scrollTop();

    const newName = replaceUnderscorebySpace(params.name);
    searchByName(newName).then(res => {
      setOil(res.data[0]._source);
    });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      {oil && oil.recipes && (
        <Recipe
          name={params.name}
          recipes={oil.recipes}
          onToggle={handleToggle}
          activeTabs={activeTabs}
        />
      )}
    </Suspense>
  );
};

export default withRouter(RecipePage);

RecipePage.propTypes = {
  match: PropTypes.object.isRequired,
};
