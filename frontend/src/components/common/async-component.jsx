import React, { Component, Suspense } from "react";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Component: null,
      };
    }

    async componentDidMount() {
      const { default: Component } = await importComponent();

      this.setState({
        Component,
      });
    }

    render() {
      const { Component } = this.state;

      return Component ? (
        <Suspense fallback={[]}>
          <Component {...this.props} />
        </Suspense>
      ) : null;
    }
  }

  return AsyncComponent;
}
