import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import PropTypes from "prop-types";

import { getSuggestions } from "../../../services/elasticSearch";

import "./search-box.scss";

class SearchBox extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
    };
  }

  renderSuggestion = suggestion => {
    return (
      <div className="result">
        <div>{suggestion}</div>
      </div>
    );
  };

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue });
    // empty doesn't call onSuggestionsFetchRequested
    if (!newValue) {
      const { onUpdate } = this.props;
      onUpdate(newValue);
    }
  };

  onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  onSuggestionSelected = (event, { suggestion }) => {
    const { onUpdate } = this.props;
    onUpdate(suggestion);
  };

  onSuggestionsFetchRequested = ({ value }) => {
    getSuggestions(value).then(res => {
      const results = res.data.map(h => h._source);
      if (results.length > 0) {
        const reg = /[\u0300-\u036f]/g; // remove special chars
        const newValue = value.normalize("NFD").replace(reg, "").toLowerCase();

        const ideals = results
          .map(result => result.ideal)
          .reduce((acc, curr) => acc.concat(curr), [])
          .filter(this.onlyUnique)
          .filter(unique => {
            const newUnique = unique
              .normalize("NFD")
              .replace(reg, "")
              .toLowerCase();
            return newUnique.includes(newValue);
          });

        const names = results.map(r => r.name);
        const name = results[0].name
          .normalize("NFD")
          .replace(reg, "")
          .toLowerCase();
        if (name.includes(newValue)) {
          this.setState({ suggestions: names });
        } else {
          this.setState({ suggestions: ideals });
        }
      }

      const { onUpdate } = this.props;
      // load search when more than 3 chars
      if (value.length > 2) {
        onUpdate(value);
      }
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  getSuggestionValue = suggestion => {
    return suggestion;
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Recherche une huile ou un symptome",
      value,
      onChange: this.onChange,
    };
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.onSuggestionSelected}
        alwaysRenderSuggestions={false}
      />
    );
  }
}
export default SearchBox;

SearchBox.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};
