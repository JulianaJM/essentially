import React, { Suspense, lazy, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import ElasticSearchService from "../../services/elasticSearch";
import Loader from "../common/loader/loader";

import "./search.scss";

const OilList = lazy(() => import("../oil-result/oil-list"));

const SearchResults = ({ location }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchOffset, setSearchOffset] = useState(0); // Search result pagination offset
  const [total, setTotal] = useState(0); // Total search results found
  const [hasNextResults, setHasNextResults] = useState(false);
  const [isRandom, setIsRandom] = useState(false);

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
    setHasNextResults(false);
  };

  const onClick = () => {
    const offsetDisplayed = searchOffset + 10;
    if (total > offsetDisplayed) {
      setSearchOffset(offsetDisplayed);
    } else {
      setHasNextResults(false);
    }
  };

  useEffect(() => {
    ElasticSearchService.getRandom().then(res => {
      setSearchResults(res.data.hits);
      setIsRandom(true);
    });
  }, []);

  useEffect(() => {
    const searchParams = getSearchValues();
    if (searchParams.length > 0) {
      setIsRandom(false);
      ElasticSearchService.search(searchParams, searchOffset)
        .then(res => {
          if (res.data.total.value === 0) {
            resetSearchResults();
          } else {
            setTotal(res.data.total.value);
            setSearchResults([...searchResults, ...res.data.hits]);
            setHasNextResults(true);
          }
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
      <div className="search__results">
        {searchResults.length > 0 && (
          <Suspense fallback={<Loader />}>
            {!isRandom && hasNextResults && (
              <p className="search__results__total">
                {total} résultats trouvés
              </p>
            )}
            {isRandom && (
              <h2 className="search__results__discover">
                Je découvre la sélection du jour
              </h2>
            )}
            <OilList oils={searchResults} />
            {hasNextResults && (
              <div className="button-wrapper">
                <button className="button-next" type="button" onClick={onClick}>
                  <FontAwesomeIcon icon={faArrowDown} />
                  <p className="sr-only">Plus de résultats</p>
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
};

export default SearchResults;
