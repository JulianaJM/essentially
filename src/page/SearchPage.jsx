import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import SearchBox from "../components/search/searchbox/SearchBox";
import SearchResults from "../components/search/SearchResults";

import "./search-page.scss";

const SearchPage = props => {
  const handleChange = queryParams => {
    const { history } = props;
    history.push("");
    history.push(`?value=${queryParams}`);
  };
  return (
    <>
      <div className="search-bar">
        <SearchBox onUpdate={handleChange} />
      </div>
      <SearchResults {...props} />
    </>
  );
};

export default withRouter(SearchPage);

SearchPage.propTypes = {
  history: PropTypes.object.isRequired,
};
