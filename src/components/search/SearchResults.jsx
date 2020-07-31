import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";

import { getRandomOils, search } from "../../services/elasticSearch";
import OilListSkeleton from "../common/skeleton/OilListSkeleton";
import OilList from "../oil-result/OilList";
import { removeUselessElement } from "../../utils/arrayUtils";
import useAsyncError from "../../utils/useAsyncError";

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

  const throwError = useAsyncError();

  const getSearchValues = () => {
    const queryParamString = location.search
      ? location.search.split("=")[1]
      : "";

    const queryParams = queryParamString ? queryParamString.split("+") : [];
    return queryParams.map(param => {
      // remove commas and encoded spaces
      let newParam = decodeURI(param.replace(",", ""));

      // FIXME remove when backend handle it
      if (param.toLowerCase().startsWith("huile")) {
        newParam = newParam.replace("-", " ");
        newParam = newParam.slice(20, param.length);
      }
      return newParam;
    });
  };

  const getHightlights = () => {
    if (location.search) {
      const queryParams = location.search.split("=")[1];
      const decode = decodeURI(queryParams);
      const hightlights = [decode];

      if (!decode.includes(",")) {
        return hightlights.concat(removeUselessElement(decode.split(" ")));
      }

      // autosuggest with commas
      let tabOfSearchWords = [];
      decode.split(",").forEach(t => {
        tabOfSearchWords = tabOfSearchWords.concat(t.split(" "));
      });

      return hightlights.concat(removeUselessElement(tabOfSearchWords));
    }

    return [];
  };

  const searchParams = getSearchValues();

  const loadNextResults = () => {
    const newSearchOffset = searchOffset + 10;
    if (total > newSearchOffset) {
      if (newSearchOffset !== searchOffset)
        // avoid calls with same offset
        search(searchParams, newSearchOffset)
          .then(res => {
            dispatch({
              type: "SEARCH_NEXT_RESULTS",
              searchOffset: newSearchOffset,
              searchResults: res.data.hits,
              hasNextResults: true,
              isRandom: false,
              total,
            });
          })
          .catch(() => {
            throwError(new Error("An error occured while search next"));
          });
    } else {
      dispatch({
        type: "SEARCH_NEXT_RESULTS",
        searchOffset: 0,
        searchResults: [],
        hasNextResults: false,
        isRandom: false,
        total,
      });
    }
  };

  useEffect(() => {
    if (location.search) {
      if (searchParams.length > 0) {
        search(searchParams, searchOffset)
          .then(res => {
            const newTotal = res.data.total.value;
            dispatch({
              type: "SEARCH_RESULTS",
              searchOffset,
              searchResults: res.data.hits,
              hasNextResults: newTotal > 10,
              isRandom: false,
              total: newTotal,
            });
          })
          .catch(() => {
            throwError(new Error("An error occured while search"));
          });
      } else {
        dispatch({
          type: "RESET",
        });
      }
    } else {
      getRandomOils()
        .then(res => {
          dispatch({
            type: "SEARCH_RANDOM_RESULTS",
            searchOffset: 0,
            searchResults: res.data.hits,
            hasNextResults: false,
            isRandom: true,
            total: res.data.total.value,
          });
        })
        .catch(() => {
          throwError(new Error("An error occured while search"));
        });
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

        {isRandom && searchResults && searchResults.length > 0 && (
          <h2 className="search__results__discover">
            Sélection des 10 huiles du jour
          </h2>
        )}

        {/* skeleton on first load */}
        {searchResults ? (
          <OilList oils={searchResults} hightlight={getHightlights()} />
        ) : (
          <OilListSkeleton />
        )}

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
