import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import PropTypes from "prop-types";
import Fuse from "fuse.js";

import { getSuggestions } from "../../../services/elasticSearch";
import { onlyUnique } from "../../../utils/arrayUtils";

import "./search-box.scss";

class SearchBox extends Component {
  constructor() {
    super();

    this.state = {
      // value: "",
      suggestions: [],
    };
  }

  renderSuggestion = suggestion => {
    return (
      <div className="result">
        <div>{suggestion.item}</div>
      </div>
    );
  };

  onChange = (event, { newValue }) => {
    // this.setState({ value: newValue });
    // empty doesn't call onSuggestionsFetchRequested
    // if (!newValue) {
    const { onUpdate } = this.props;
    onUpdate(newValue);
    // }
  };

  onSuggestionSelected = (event, { suggestion }) => {
    const { onUpdate } = this.props;
    onUpdate(suggestion.item);
  };

  onSuggestionsFetchRequested = ({ value }) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.value === value) return;
    getSuggestions(value).then(res => {
      const results = res.data.map(h => h._source);

      const reg = /[\u0300-\u036f]/g; // remove special chars
      const newValue = value.normalize("NFD").replace(reg, "").toLowerCase();

      const ideals = results
        .map(result => {
          // const health = result.health.indications;
          // const mood = result.mood.indications;
          // const beauty = result.beauty.indications;
          const names = result.name;
          return result.ideal.concat(/* health, mood, beauty, */ names);
        })
        .reduce((acc, curr) => acc.concat(curr), [])
        .sort((a, b) => a.localeCompare(b))
        .filter(onlyUnique);

      const fuse = new Fuse(ideals);
      const suggestions = fuse.search(newValue);
      this.setState({ suggestions });

      const { onUpdate } = this.props;
      onUpdate(value);
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  getSuggestionValue = suggestion => {
    return suggestion.item;
  };

  render() {
    const { suggestions } = this.state;
    const { value } = this.props;
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
  value: PropTypes.string.isRequired,
};
