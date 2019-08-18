import React, { PureComponent } from "react";
import { hot } from "react-hot-loader";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header-container";
import SearchResults from "./components/search/search-results";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import OilDetails from "./components/oil-details/oil-details";

import "./app.scss";

class App extends PureComponent {
  state = {
    isBottom: false,
    isScrollable: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const element = document.documentElement;
    const currentScrollPos = window.pageYOffset;
    const clientHeight = element.clientHeight;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;

    const distanceFromBottom = scrollHeight - scrollTop;
    const isScrollable =
      currentScrollPos > 0 && distanceFromBottom > clientHeight;
    const isBottom =
      element.scrollHeight - element.scrollTop === element.clientHeight;

    const visible = isBottom ? true : isScrollable;

    this.setState({
      isScrollable: visible,
      isBottom,
    });
  };
  render() {
    const { isBottom, isScrollable } = this.state;
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
              render={props => <SearchResults isBottom={isBottom} {...props} />}
            />
            <Route path="/:name" render={props => <OilDetails {...props} />} />
          </Switch>
        </div>
      </div>
    );
  }
}
// avoid reload state on dev change
// const hotFunction = hot(module);
// export default hotFunction(App);
export default hot(module)(App);
