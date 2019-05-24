import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';
import oils from './resources/oils.json';
import oilsDetails from './resources/oils-details.json';
import symptoms from './resources/symptoms.json';
import Header from './components/header/Header';
import Search from './components/search/Search';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import OilDetails from './components/oil-details/OilDetails';

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

  loadData = () => ({ oils, oilsDetails, symptoms });

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
              exact
              path="/"
              render={props => <Search {...props} options={db} />}
            />
            <Route
              path="/:name"
              render={props => <OilDetails {...props} details={db} />}
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
