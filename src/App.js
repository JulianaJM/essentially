import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Header from './components/header/Header';
import Search from './components/search/Search';

import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <h2>Search</h2>
          <Search />
        </div>
      </div>
    );
  }
}
// avoid reload state on dev change
// const hotFunction = hot(module);
// export default hotFunction(App);
export default hot(module)(App);
