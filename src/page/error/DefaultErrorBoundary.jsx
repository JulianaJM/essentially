import React from "react";
import propTypes from "prop-types";

import "./error.scss";

export default class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false,
  };

  static propTypes = {
    children: propTypes.node.isRequired,
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? (
      <div className="error">
        <div className="face">
          <div className="band">
            <div className="red" />
            <div className="white" />
            <div className="blue" />
          </div>
          <div className="eyes" />
          <div className="dimples" />
          <div className="mouth" />
        </div>

        <h2>Oops! Something went wrong!</h2>
        <a href="/" className="btn">
          Return to Home
        </a>
      </div>
    ) : (
      children
    );
  }
}
