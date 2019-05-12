import React, { Component, Suspense } from 'react';
import { hot } from 'react-hot-loader';
import db from './resources/db';
import Header from './components/header/Header';
import Search from './components/search/Search';
const OilList = React.lazy(() => import('./components/oil-result/OilList'));

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

  handleSearch = selectedSymptoms => {
    const {
      db: { oils }
    } = this.state;

    const result = oils
      .map(oil => {
        const { goodFor } = oil;
        const filteredArray = goodFor.filter(item =>
          selectedSymptoms.includes(item)
        );
        if (filteredArray.length > 0) {
          return oil;
        }
      })
      .filter(item => item !== undefined);

    this.setState({ searchResults: result });
  };

  render() {
    const {
      db: { symptoms },
      searchResults
    } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Search options={symptoms} onSearch={this.handleSearch} />

          <Suspense fallback={[]}>
            <OilList oils={searchResults} />
          </Suspense>
        </div>
      </div>
    );
  }
}
// avoid reload state on dev change
// const hotFunction = hot(module);
// export default hotFunction(App);
export default hot(module)(App);
