import React, { Component, Suspense } from "react";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ComponentToImport: null,
      };
    }

    async componentDidMount() {
      const { default: ComponentToImport } = await importComponent();

      this.setState({
        ComponentToImport,
      });
    }

    render() {
      const { ComponentToImport } = this.state;

      return ComponentToImport ? (
        <Suspense fallback={[]}>
          <Component {...this.props} />
        </Suspense>
      ) : null;
    }
  }

  return AsyncComponent;
}
