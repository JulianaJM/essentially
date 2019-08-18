import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ElasticSearchService from "../../services/elasticSearch";
import Loader from "../common/loader/loader";

import "./search.scss";

const OilList = lazy(() => import("../oil-result/oil-list"));

const SearchResults = ({ location, isBottom, isTop }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchOffset, setSearchOffset] = useState(0); // Search result pagination offset
  const [total, setTotal] = useState(0); // Total search results found
  const [isLoading, setIsLoading] = useState(false);

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
    if (isBottom && total > searchOffset) {
      setIsLoading(true);
      setSearchOffset(searchOffset + 10);
    }
  }, [isBottom]);

  useEffect(() => {
    const terms = getSearchValues();
    if (terms.length > 0) {
      ElasticSearchService.search(terms, searchOffset)
        .then(res => {
          if (res.data.total.value === 0) {
            setSearchOffset(0);
            setSearchResults([]);
            return;
          }
          setTotal(res.data.total.value);
          setIsLoading(false);
          setSearchResults(res.data.hits);

          //if (resultsEl.current) {
          //resultsEl.current.focus();
          //}
        })
        .catch((/* err */) => {
          // console.log("error during search", err);
        });
    }
  }, [location.search, searchOffset]);

  return (
    <div className="search">
      <div className="search__intro"> </div>

      <div className="search__result" ref={resultsEl} tabIndex={-1}>
        <Suspense fallback={[]}>
          <OilList oils={searchResults} />
        </Suspense>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

SearchResults.propTypes = {
  location: PropTypes.object.isRequired,
  isBottom: PropTypes.bool.isRequired,
};

export default SearchResults;
