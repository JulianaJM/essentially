import React, { Suspense, lazy, useEffect, useReducer, useRef } from "react";
import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { getRandomOils, search } from "../../services/elasticSearch";
import OilListSkeleton from "../common/skeleton/OilListSkeleton";
// import Loader from "../common/loader/Loader";

import "./search.scss";

const OilList = lazy(() => import("../oil-result/OilList"));

function init() {
  return {
    searchOffset: 0, // Search result pagination offset
    searchResults: [],
    hasNextResults: false,
    isRandom: true,
    total: 0, // Total search results found
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "setSearchResults":
      return {
        ...state,
        searchResults: action.searchResults,
      };
    case "setIsRandom":
      return { ...state, isRandom: action.isRandom };
    case "setHasNextResults":
      return { ...state, hasNextResults: action.hasNextResults };
    case "setTotal":
      return { ...state, total: action.total };
    case "setSearchOffset":
      return { ...state, searchOffset: action.searchOffset };
    case "reset":
      return init();
    default:
      return state;
  }
}

const SearchResults = ({ location, isPageBottom }) => {
  const [
    { searchOffset, searchResults, hasNextResults, isRandom, total },
    dispatch,
  ] = useReducer(reducer, {
    searchOffset: 0,
    searchResults: [],
    hasNextResults: false,
    isRandom: true,
    total: 0,
  });

  // refs keeps value and avoid useless rerender
  const searchvalue = useRef("");
  const isValueChanged = useRef(false);

  const getSearchValues = () => {
    const queryParamString = location.search
      ? location.search.split("=")[1]
      : "";

    const queryParams = queryParamString ? queryParamString.split("+") : [];
    return queryParams.map(param => {
      const decode = decodeURI(param);

      if (searchvalue.current === decode) {
        isValueChanged.current = false;
      } else {
        isValueChanged.current = true;
        dispatch({ type: "reset" });
        // keep random to false
        dispatch({
          type: "setIsRandom",
          isRandom: false,
        });
      }
      searchvalue.current = decode;

      return decode.trim();
    });
  };

  const loadNextResults = () => {
    const offsetDisplayed = searchOffset + 10;
    if (total > offsetDisplayed) {
      dispatch({ type: "setSearchOffset", searchOffset: offsetDisplayed });
    } else {
      dispatch({ type: "setHasNextResults", hasNextResults: false });
    }
  };

  useEffect(() => {
    // mount
    getRandomOils().then(res => {
      dispatch({ type: "setSearchResults", searchResults: res.data.hits });
    });
  }, []);

  useEffect(() => {
    const searchParams = getSearchValues();
    search(searchParams, searchOffset).then(res => {
      const totalRes = res.data.total.value;
      dispatch({ type: "setTotal", total: totalRes });
      dispatch({
        type: "setHasNextResults",
        hasNextResults: totalRes > 10,
      });
      if (totalRes === 0) {
        dispatch({ type: "reset" });
      } else {
        if (isRandom) {
          dispatch({
            type: "setIsRandom",
            isRandom: false,
          });
        }

        if (totalRes <= 10) {
          dispatch({
            type: "setSearchResults",
            searchResults: res.data.hits,
          });
        } else {
          dispatch({
            type: "setSearchResults",
            searchResults: [...searchResults, ...res.data.hits],
          });
        }
      }
    });
  }, [location.search, searchOffset]);

  useEffect(() => {
    if (isPageBottom && !isRandom && hasNextResults) {
      loadNextResults();
    }
  }, [isPageBottom]);

  return (
    <div className="search">
      <div className="search__results">
        <Suspense fallback={<OilListSkeleton />}>
          {searchResults.length > 0 ? (
            <>
              {!isRandom ? (
                <p className="search__results__total">
                  {total} résultats trouvés
                </p>
              ) : (
                <h2 className="search__results__discover">
                  Je découvre la sélection des 10 huiles du jour
                </h2>
              )}

              <OilList oils={searchResults} />
            </>
          ) : (
            <p className="search__results__total">Aucun résultats trouvés</p>
          )}
        </Suspense>
      </div>
    </div>
  );
};

SearchResults.defaultProps = { isPageBottom: false };

SearchResults.propTypes = {
  location: PropTypes.object.isRequired,
  isPageBottom: PropTypes.bool,
};

export default SearchResults;
