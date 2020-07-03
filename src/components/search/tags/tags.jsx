import React, { Component } from "react";
import Select from "react-select/creatable";
import { isEqual } from "lodash";
import PropTypes from "prop-types";
import suggestions from "../../../resources/suggestions";

import "./tags.scss";

const components = {
  DropdownIndicator: null,
};

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = { tags: [], currentValue: "" };

    this.options = suggestions.options.sort((a, b) => {
      return a.label > b.label ? 1 : -1;
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tags } = this.state;
    const { onUpdate } = this.props;
    /* eslint-disable-next-line react/destructuring-assignment */
    if (!isEqual(prevState.tags, tags)) {
      onUpdate(tags);
    }
  }

  handleChange = options => {
    const values = options && options.map(option => option.value);
    // const currentSearch = options && options.slice(-1).pop();
    this.setState({
      tags: values || [],
      currentValue: "",
    });
  };

  handleInputChange = value => {
    this.setState({
      currentValue: value,
    });
  };

  render() {
    const { currentValue } = this.state;
    const { placeholder } = this.props;
    return (
      <Select
        isMulti
        components={components}
        placeholder={placeholder}
        formatCreateLabel={userInput => `Search for ${userInput}`}
        menuIsOpen={currentValue}
        name="tagsearch"
        options={this.options}
        className="select-container paddingSearchBar"
        classNamePrefix="select"
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
        cacheOptions
      />
    );
  }
}

Tags.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Tags;
