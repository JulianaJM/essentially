import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';
import db from './resources/db';
import Header from './components/header/Header';
import Search from './components/search/Search';
import About from './components/about/About';
import Contact from './components/contact/Contact';

import './app.scss';

class App extends Component {
  state = {
    db: [],
    searchResults: []
  };

  componentDidMount() {
    const data = this.loadData();
    this.setState({ db: data });
  }

  loadData = () => {
    return db;
  };

  render() {
    const { db } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/:name?"
              render={props => <Search {...props} options={db} />}
            />
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
