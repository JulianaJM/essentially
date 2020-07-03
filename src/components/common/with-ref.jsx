import React, { PureComponent } from "react";
import { func } from "prop-types";

function withRef(WrappedComponent) {
  class WithRef extends PureComponent {
    static propTypes = {
      forwardedRef: func.isRequired,
    };
    render() {
      const { forwardedRef, ...rest } = this.props;

      return <WrappedComponent ref={forwardedRef} {...rest} />;
    }
  }
  /*  return React.forwardRef((props, ref) => {
    return <WithRef {...props} forwardedRef={ref} />;
  }); */
  const forwardRef = (props, ref) => {
    debugger;
    return <WithRef {...props} forwardedRef={ref} />;
  };
  // Donne à ce composant un nom d’affichage plus utile dans les DevTools.
  const name = WrappedComponent.displayName || WrappedComponent.name;
  forwardRef.displayName = `withRef(${name})`;

  return React.forwardRef(forwardRef);
}

export default withRef;
