import "core-js/stable";
import "regenerator-runtime/runtime";
import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import DefaultErrorBoundary from "./components/DefaultErrorBoundary";

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
