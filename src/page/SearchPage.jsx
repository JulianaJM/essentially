import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";

import SearchBox from "../components/search/searchbox/SearchBox";
import SearchResults from "../components/search/SearchResults";
import { isPageBottom, scrollTop } from "../utils/scroll";

import "./search-page.scss";

const SearchPage = props => {
  const [isBottom, setIsBottom] = useState(false);

  const handleChange = queryParams => {
    const { history } = props;
    history.push("");
    history.push(`?value=${queryParams}`);
  };

  const handleScroll = () => {
    setIsBottom(isPageBottom());
  };

  const trottledFunction = debounce(handleScroll, 500);

  useEffect(() => {
    scrollTop();
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
      <SearchResults isPageBottom={isBottom} {...props} />
    </>
  );
};

export default withRouter(React.memo(SearchPage));

SearchPage.propTypes = {
  history: PropTypes.object.isRequired,
};
