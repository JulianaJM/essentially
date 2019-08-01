import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import SearchResults from "./components/search/search-results";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import OilDetails from "./components/oil-details/oil-details";

import "./app.scss";

class App extends Component {
  state = {
    db: [],
    searchResults: []
  };

  componentDidMount() {
    // const data = this.loadData();
    // this.setState({ db: data });
  }

  // loadData = () => ({ oils, oilsDetails, symptoms });

  render() {
    // const { db } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route
              exact
              path="/"
              render={props => <SearchResults {...props} />}
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
