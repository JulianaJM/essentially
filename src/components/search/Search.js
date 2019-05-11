import React, { Component, Suspense } from 'react';
import CategoryList from '../radio-button/RadioButtonList';
const SymptomList = React.lazy(() => import('../symptom/SymptomList'));

import db from '../../resources/db';

export default class Search extends Component {
  state = {
    db: [],
    symptomsByCategory: []
  };

  componentDidMount() {
    const data = this.loadData();
    this.setState({ db: data });
  }

  loadData = () => {
    return db;
  };

  getCategories = () => {
    const { db } = this.state;
    const categories = [];
    db.symptoms &&
      db.symptoms.forEach(symptom => {
        if (!categories.includes(symptom.category)) {
          categories.push(symptom.category);
        }
      });
    return categories;
  };

  handleCategoryChange = event => {
    const { db } = this.state;
    const category = event.target.value;
    const symptomsByCategory = db.symptoms.filter(
      symptom => symptom.category === category
    );
    this.setState({ symptomsByCategory });
  };

  render() {
    const { symptomsByCategory } = this.state;
    return (
      <div>
        <CategoryList
          items={this.getCategories()}
          onChange={this.handleCategoryChange}
        />
        {symptomsByCategory.length > 0 ? (
          <Suspense fallback={null}>
            <SymptomList symptoms={symptomsByCategory} />
          </Suspense>
        ) : null}
      </div>
    );
  }
}
