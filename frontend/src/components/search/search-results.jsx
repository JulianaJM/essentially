import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import ElasticSearchService from "../../services/elasticSearch";

import "./search.scss";

const OilList = lazy(() => import("../oil-result/oil-list"));

const SearchResults = ({ location }) => {
  const [searchResults, setSearchResults] = useState([]);
  const resultsEl = useRef(null);

  const getSearchValues = () => {
    const queryParamString = location.search
      ? location.search.split("=")[1]
      : "";
    const queryParams = queryParamString.split(",");

    return queryParams.map(param => {
      const decode = decodeURI(param);
      return decode.trim();
    });
  };

  useEffect(() => {
    const terms = getSearchValues();
    if (terms.length > 0) {
      ElasticSearchService.search(terms)
        .then(res => {
          setSearchResults(res.data);
          if (resultsEl.current) {
            resultsEl.current.focus();
          }
        })
        .catch((/* err */) => {
          // console.log("error during search", err);
        });
    }
  }, [location.search]);

  return (
    <div className="search">
      <div className="search__intro"> </div>

      <div className="search__result" ref={resultsEl} tabIndex={-1}>
        <Suspense fallback={[]}>
          <OilList oils={searchResults} />
        </Suspense>
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(SearchResults);
