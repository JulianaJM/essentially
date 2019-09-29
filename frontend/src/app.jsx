import { hot } from "react-hot-loader/root";
import React, { PureComponent, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { isMobile } from "react-device-detect";

import Header from "./components/header/header-container";
import SearchResults from "./components/search/search-results";
import { /* isPageBottom */ isPageScrollable } from "./utils/scroll";
import Loader from "./components/common/loader/loader";

import "./app.scss";

const About = lazy(() => import("./components/about/about"));
const Contact = lazy(() => import("./components/contact/contact"));
const OilDetails = lazy(() => import("./components/oil-details/oil-details"));

class App extends PureComponent {
  state = {
    isScrollable: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const isScrollable = !isMobile && isPageScrollable();
    // const isBottom = isPageBottom();

    this.setState({
      isScrollable,
    });
  };
  render() {
    const { isScrollable } = this.state;
    return (
      <div className="app">
        <Header isSticky={isScrollable} />
        <div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route
              exact
              path="/"
              render={props => <SearchResults {...props} />}
            />
            <Route
              path="/:name"
              render={props => (
                <Suspense fallback={<Loader />}>
                  <OilDetails {...props} />
                </Suspense>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
// avoid reload state on dev change
export default hot(App);
