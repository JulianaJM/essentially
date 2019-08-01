import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@babel/polyfill"; // polyfill features not available in older browsers (eg promise)
import App from "./app";
import DefaultErrorBoundary from "./components/default-error-boundary";
import "./style.css";
if (process.env.NODE_ENV === "development") {
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
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
