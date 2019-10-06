import { hot } from "react-hot-loader/root";
import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header-container";
import SearchResults from "./components/search/search-results";
import Loader from "./components/common/loader/loader";
import Navbar from "./components/common/navbar/navbar";
import AsyncComponent from "./components/common/async-component";

import "./app.scss";

const About = lazy(() => import("./components/about/about"));
const Contact = lazy(() => import("./components/contact/contact"));
const OilDetails = lazy(() => import("./components/oil-details/oil-details"));

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/about" component={AsyncComponent(() => About)} />
      <Route path="/contact" component={AsyncComponent(() => Contact)} />
      <Route exact path="/" render={props => <SearchResults {...props} />} />
      <Route
        path="/:name"
        render={props => (
          <Suspense fallback={<Loader />}>
            <OilDetails {...props} />
          </Suspense>
        )}
      />
    </Switch>
    <Navbar />
  </div>
);

// avoid reload state on dev change
export default hot(App);
