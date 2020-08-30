/* eslint-disable react/jsx-props-no-spreading */

import { hot } from "react-hot-loader/root";
import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/common/header/HeaderContainer";
// import Navbar from "./components/common/navbar/navbar";
import SearchPage from "./page/search/SearchPage";
import Loader from "./components/common/loader/Loader";

import "./app.scss";
import SideNavbar from "./components/common/navbar/SideNavbar";

const IndexOil = lazy(() => import("./page/indexOil/IndexOil"));
const About = lazy(() => import("./page/about/about"));
const DetailPage = lazy(() => import("./page/detail/DetailPage"));
const RecipePage = lazy(() => import("./page/recipe/RecipePage"));
const NotFound = lazy(() => import("./page/not-found/NotFound"));
const More = lazy(() => import("./page/more/More"));
const RecipeSearch = lazy(() => import("./page/recipe/RecipeSearch"));

const App = () => (
  <>
    <SideNavbar />
    <div id="overlay" />
    <Header />
    <div className="container">
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/index" component={IndexOil} />
          <Route path="/notfound" component={NotFound} />
          <Route path="/more" component={More} />
          <Route path="/recipes" component={RecipeSearch} />
          <Route exact path="/" render={props => <SearchPage {...props} />} />
          <Route
            path="/:name/recipe"
            render={props => <RecipePage {...props} />}
          />
          <Route path="/:name" component={DetailPage} />
        </Switch>
      </Suspense>
    </div>
    {/* <Navbar /> */}
  </>
);

// avoid reload state on dev change
export default hot(App);
