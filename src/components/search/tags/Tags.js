import React, { Component } from 'react';
import Select from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import suggestions from '../../../resources/suggestions';
import _isEqual from 'lodash/isequal';
import PropTypes from 'prop-types';

import './tags.scss';

/* const ENTER_KEY = 13;
const COMMA_KEY = 188;
const BACKSPACE_KEY = 8; */
const animatedComponents = makeAnimated();

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = { tags: [] };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_isEqual(prevState.tags, this.state.tags)) {
      this.props.onUpdate(this.state.tags);
    }
  }

  handleChange = options => {
    const values = options && options.map(option => option.value);
    this.setState({
      tags: values || []
    });
  };

  render() {
    const { options } = suggestions;
    options.sort((a, b) => {
      return a.label > b.label ? 1 : -1;
    });

    return (
      <Select
        isMulti
        components={animatedComponents}
        name="symptoms"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={this.handleChange}
        // onInputChange={this.handleKeyDown}
        cacheOptions={true}
      />
    );
  }
}

Tags.propTypes = {
  onUpdate: PropTypes.func.isRequired
};

export default Tags;
