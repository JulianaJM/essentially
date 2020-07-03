import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import DefaultErrorBoundary from "./components/default-error-boundary";

import "./style.scss";

if (process.env.NODE_ENV === "development") {
  /* eslint-disable-next-line import/no-extraneous-dependencies */
  /* const axe = require("react-axe");
  axe(React, ReactDOM, 1000); */
}
ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById("app")
);
