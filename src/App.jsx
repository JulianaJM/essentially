/* eslint-disable react/jsx-props-no-spreading */

import { hot } from "react-hot-loader/root";
import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/HeaderContainer";
// import Navbar from "./components/common/navbar/navbar";
import AsyncComponent from "./components/common/async-component";
import About from "./components/about/about";
import DetailPage from "./page/DetailPage";
import SearchPage from "./page/SearchPage";

import "./app.scss";

const Contact = lazy(() => import("./components/contact/contact"));

const App = () => (
  <>
    <Header />
    <div className="container">
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={AsyncComponent(() => Contact)} />
        <Route exact path="/" render={props => <SearchPage {...props} />} />
        <Route path="/:name" render={props => <DetailPage {...props} />} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </>
);

// avoid reload state on dev change
export default hot(App);
