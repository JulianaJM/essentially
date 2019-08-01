import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
const OilList = lazy(() => import("../oil-result/oil-list"));
import ElasticSearchService from "../../services/elasticSearch";
import log from "log";

import "./search.scss";

const SearchResults = ({ location }) => {
  const [searchResults, setSearchResults] = useState([]);
  const resultsEl = useRef(null);

  const getSearchValues = () => {
    const queryParamString = location.search
      ? location.search.split("=")[1]
      : "";
    const queryParams = queryParamString.split(/[\s,]+/);

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
        .catch(err => {
          log.error("error during search", err);
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
  match: PropTypes.object,
  location: PropTypes.object
};

export default withRouter(SearchResults);
