/* eslint-disable react/jsx-props-no-spreading */

import { hot } from "react-hot-loader/root";
import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/HeaderContainer";
import SearchResults from "./components/search/SearchResults";
import Loader from "./components/common/loader/loader";
import Navbar from "./components/common/navbar/navbar";
import AsyncComponent from "./components/common/async-component";
import About from "./components/about/about";

import "./app.scss";

const Contact = lazy(() => import("./components/contact/contact"));
const OilDetails = lazy(() => import("./components/oil-details/OilDetails"));

const App = () => (
  <>
    <header>
      <Header />
    </header>
    <section>
      <Switch>
        <Route path="/about" component={About} />
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
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </section>
    <footer>
      <small>&copy; juliana jm</small>
      <Navbar />
    </footer>
  </>
);

// avoid reload state on dev change
export default hot(App);
