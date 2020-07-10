import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import throttle from "lodash/throttle";

import SearchBox from "../components/search/searchbox/SearchBox";
import SearchResults from "../components/search/SearchResults";
import { isPageBottom } from "../utils/scroll";

import "./search-page.scss";

const SearchPage = props => {
  const [isBottom, setIsBottom] = useState(false);
  const [isValueChanged, setIsValueChanged] = useState(false);

  const handleChange = queryParams => {
    const { history } = props;
    history.push("");
    history.push(`?value=${queryParams}`);
    setIsValueChanged(true);
  };

  const handleScroll = () => {
    setIsBottom(isPageBottom());
  };

  const trottledFunction = throttle(handleScroll, 300);

  useEffect(() => {
    window.addEventListener("scroll", trottledFunction);
    return () => {
      // console.log("will unmount");
      window.removeEventListener("scroll", trottledFunction);
    };
  }, []);

  return (
    <>
      <div className="search-bar">
        <SearchBox onUpdate={handleChange} />
      </div>
      <SearchResults
        isPageBottom={isBottom}
        isValueChanged={isValueChanged}
        {...props}
      />
    </>
  );
};

export default withRouter(SearchPage);

SearchPage.propTypes = {
  history: PropTypes.object.isRequired,
};
