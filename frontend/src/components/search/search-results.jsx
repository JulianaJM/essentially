import React, { Suspense, lazy, useState, useEffect } from "react";
import PropTypes from "prop-types";
import ElasticSearchService from "../../services/elasticSearch";
import Loader from "../common/loader/loader";

import "./search.scss";

const OilList = lazy(() => import("../oil-result/oil-list"));

const SearchResults = ({ location }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchOffset, setSearchOffset] = useState(0); // Search result pagination offset
  const [total, setTotal] = useState(0); // Total search results found
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const getSearchValues = () => {
    const queryParamString = location.search
      ? location.search.split("=")[1]
      : "";
    const queryParams = queryParamString ? queryParamString.split(",") : [];
    return queryParams.map(param => {
      const decode = decodeURI(param);
      return decode.trim();
    });
  };

  const resetSearchResults = () => {
    setSearchOffset(0);
    setSearchResults([]);
    setIsButtonVisible(false);
  };

  const onClick = () => {
    const offsetDisplayed = searchOffset + 10;
    if (total > offsetDisplayed) {
      setSearchOffset(offsetDisplayed);
    } else {
      setIsButtonVisible(false);
    }
  };

  // useEffect(() => {
  //   if (isBottom) {
  //     const offsetDisplayed = searchOffset + 10;
  //     if (total > offsetDisplayed) {
  //       setSearchOffset(offsetDisplayed);
  //     }
  //   }
  // }, [isBottom]);

  useEffect(() => {
    const searchParams = getSearchValues();
    if (searchParams.length > 0) {
      ElasticSearchService.search(searchParams, searchOffset)
        .then(res => {
          if (res.data.total.value === 0) {
            resetSearchResults();
            return;
          }
          setTotal(res.data.total.value);
          setSearchResults([...searchResults, ...res.data.hits]);
          setIsButtonVisible(true);
        })
        .catch((/* err */) => {
          // console.log("error during search", err);
        });
    } else {
      resetSearchResults();
    }
  }, [location.search, searchOffset]);

  return (
    <div className="search">
      <div className="search__intro"> </div>

      <div className="search__results">
        {searchResults.length > 0 && (
          <Suspense fallback={<Loader />}>
            <p>Total: {total}</p>
            <OilList oils={searchResults} />
            {isButtonVisible && (
              <div className="button-wrapper">
                <button className="button-next" type="button" onClick={onClick}>
                  plus de résultas
                </button>
              </div>
            )}
          </Suspense>
        )}
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  location: PropTypes.object.isRequired,
  // isBottom: PropTypes.bool.isRequired,
};

export default SearchResults;
