/* eslint-disable react/jsx-props-no-spreading */

import { hot } from "react-hot-loader/root";
import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/HeaderContainer";
// import Navbar from "./components/common/navbar/navbar";
import SearchPage from "./page/SearchPage";
import Loader from "./components/common/loader/Loader";

import "./app.scss";

const Contact = lazy(() => import("./components/contact/contact"));
const About = lazy(() => import("./components/about/about"));
const DetailPage = lazy(() => import("./page/DetailPage"));
const RecipePage = lazy(() => import("./page/RecipePage"));

const App = () => (
  <>
    <Header />
    <div className="container">
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" render={props => <SearchPage {...props} />} />
          <Route
            path="/:name/recipe"
            render={props => <RecipePage {...props} />}
          />
          <Route path="/:name" component={DetailPage} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </Suspense>
    </div>
  </>
);

// avoid reload state on dev change
export default hot(App);
