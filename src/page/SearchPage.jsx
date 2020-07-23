import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import throttle from "lodash/throttle";

import SearchBox from "../components/search/searchbox/SearchBox";
import SearchResults from "../components/search/SearchResults";
import { isPageBottom, scrollTop } from "../utils/scroll";

import "./search-page.scss";

const SearchPage = props => {
  const [isBottom, setIsBottom] = useState(false);
  const [value, setValue] = useState("");
  const { history } = props;

  const handleChange = queryParams => {
    setValue(queryParams);
    history.push({
      pathname: "",
      search: `?value=${queryParams}`,
    });
  };

  const handleScroll = () => {
    setIsBottom(isPageBottom());
  };

  const trottledFunction = throttle(handleScroll, 500);

  useEffect(() => {
    scrollTop();

    const initialValue = history.location.search
      ? history.location.search.split("=")[1]
      : "";

    setValue(decodeURI(initialValue));

    if (!initialValue) {
      history.push({
        pathname: "",
        search: "",
      });
    }

    window.addEventListener("scroll", trottledFunction);
    return () => {
      // console.log("will unmount");
      window.removeEventListener("scroll", trottledFunction);
    };
  }, []);

  return (
    <>
      <div className="search-bar">
        <SearchBox onUpdate={handleChange} value={value} />
      </div>
      <SearchResults isPageBottom={isBottom} {...props} />
    </>
  );
};

export default withRouter(SearchPage);

SearchPage.propTypes = {
  history: PropTypes.object.isRequired,
};
