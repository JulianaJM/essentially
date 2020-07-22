import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";

import { getRandomOils, search } from "../../services/elasticSearch";
import OilListSkeleton from "../common/skeleton/OilListSkeleton";
import OilList from "../oil-result/OilList";

import "./search.scss";

function searchReducer(state, action) {
  const { searchResults } = state;

  switch (action.type) {
    case "SEARCH_RESULTS": {
      return {
        isRandom: false,
        searchResults: action.searchResults,
        total: action.total,
        searchOffset: action.searchOffset,
        hasNextResults: action.hasNextResults,
      };
    }

    case "SEARCH_NEXT_RESULTS": {
      return {
        isRandom: false,
        searchResults: [...searchResults, ...action.searchResults],
        total: action.total,
        searchOffset: action.searchOffset,
        hasNextResults: action.hasNextResults,
      };
    }

    case "SEARCH_RANDOM_RESULTS": {
      return {
        isRandom: true,
        searchResults: action.searchResults,
        total: action.total,
        searchOffset: action.searchOffset,
        hasNextResults: action.hasNextResults,
      };
    }

    case "RESET": {
      return {
        searchOffset: 0, // Search result pagination offset
        searchResults: [],
        hasNextResults: false,
        isRandom: false,
        total: 0, // Total search results found
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const SearchResults = ({ location, isPageBottom }) => {
  const [
    { searchOffset, searchResults, hasNextResults, isRandom, total },
    dispatch,
  ] = useReducer(searchReducer, {
    searchOffset: 0,
    searchResults: null,
    hasNextResults: false,
    isRandom: true,
    total: 0,
  });

  const getSearchValues = () => {
    const queryParamString = location.search
      ? location.search.split("=")[1]
      : "";

    const queryParams = queryParamString ? queryParamString.split("+") : [];
    return queryParams.map(param => {
      const decode = decodeURI(param.replace(",", "")); // remove comas

      return decode;
    });
  };

  const loadNextResults = () => {
    const newSearchOffset = searchOffset + 10;
    if (total > newSearchOffset) {
      const searchParams = getSearchValues();
      search(searchParams, newSearchOffset).then(res => {
        dispatch({
          type: "SEARCH_NEXT_RESULTS",
          searchOffset: newSearchOffset,
          searchResults: res.data.hits,
          hasNextResults: true,
          isRandom: false,
          total,
        });
      });
    } else {
      dispatch({
        type: "SEARCH_NEXT_RESULTS",
        searchOffset,
        searchResults: [],
        hasNextResults: false,
        isRandom: false,
        total,
      });
    }
  };

  const searchParams = getSearchValues();

  useEffect(() => {
    // mount
    if (searchParams.length === 0) {
      getRandomOils().then(res => {
        dispatch({
          type: "SEARCH_RANDOM_RESULTS",
          searchOffset,
          searchResults: res.data.hits,
          hasNextResults,
          isRandom: true,
          total: res.data.total.value,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (location.search) {
      if (searchParams.length > 0) {
        search(searchParams, searchOffset).then(res => {
          const newTotal = res.data.total.value;
          dispatch({
            type: "SEARCH_RESULTS",
            searchOffset,
            searchResults: res.data.hits,
            hasNextResults: newTotal > 10,
            isRandom: false,
            total: newTotal,
          });
        });
      } else {
        dispatch({
          type: "RESET",
        });
      }
    }
  }, [location.search]);

  useEffect(() => {
    if (isPageBottom && hasNextResults) {
      loadNextResults();
    }
  }, [isPageBottom]);

  return (
    <div className="search">
      <div className="search__results">
        {!isRandom && searchResults && (
          <p className="search__results__total">
            {total > 0
              ? `${total} résultats trouvés`
              : "Aucun résultats trouvés"}
          </p>
        )}

        {isRandom && (
          <h2 className="search__results__discover">
            Je découvre la sélection des 10 huiles du jour
          </h2>
        )}

        {/* skeleton on first load */}
        {searchResults ? <OilList oils={searchResults} /> : <OilListSkeleton />}

        {/* skeleton on next res */}
        {hasNextResults && isPageBottom && (
          <div className="search__load">
            <OilListSkeleton />
          </div>
        )}
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
