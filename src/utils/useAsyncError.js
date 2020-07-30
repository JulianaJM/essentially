// https://medium.com/trabe/catching-asynchronous-errors-in-react-using-error-boundaries-5e8a5fd7b971
// asynchronous code runs outside the render and commit phases of React we can't just use a simple throw to activate boundarie errors

import React from "react";

const useAsyncError = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setError] = React.useState();
  return React.useCallback(
    e => {
      setError(() => {
        throw e;
      });
    },
    [setError]
  );
};

export default useAsyncError;
