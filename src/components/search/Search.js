import React, { Suspense, lazy, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CategoryList from '../radio-button/RadioButtonList';
const SymptomList = lazy(() => import('../symptom/SymptomList'));
const OilList = lazy(() => import('../oil-result/OilList'));

import './search.scss';

const Search = ({ options, match }) => {
  const [symptomsByCategory, setSymptomsByCategory] = useState([]);
  const [selectedSymptoms, setSeletedSymptoms] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    /*if (match.params.name) {
      const { params } = match;
      searchOil(params.name);
    } else {*/
    setSearchResults([]);
    setSeletedSymptoms([]);
    setSymptomsByCategory([]);
    //}
  }, [options, match]);

  /* const searchOil = name => {
    const { oils } = options;
    const result = oils.filter(item => {
      const currentName = item.name;
      return currentName.match(name);
    });

    setSearchResults(result);
  }; */

  const getCategories = () => {
    const categories = [];
    const { symptoms } = options;
    symptoms &&
      symptoms.forEach(option => {
        if (!categories.includes(option.category)) {
          categories.push(option.category);
        }
      });
    return categories;
  };

  const handleCategoryChange = event => {
    const { symptoms } = options;
    setSeletedSymptoms([]);
    const category = event.target.value;
    const symptomsByCategory = symptoms.find(
      option => option.category === category
    );
    const { list } = symptomsByCategory;
    if (list && list.length > 0) {
      setSymptomsByCategory(list.sort());
    }
  };

  const handleSymptomsChange = event => {
    const value = event.target.value;
    const newSelectedSymptoms = [...selectedSymptoms];
    if (!newSelectedSymptoms.includes(value)) {
      newSelectedSymptoms.push(value);
    } else {
      const index = newSelectedSymptoms.indexOf(value);
      if (index !== -1) newSelectedSymptoms.splice(index, 1);
    }
    setSeletedSymptoms(newSelectedSymptoms);
  };
  const handleSearch = () => {
    const { oils } = options;

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
      .filter(item => item !== undefined)
      .sort();

    setSearchResults(result);
  };
  return (
    <div className="search">
      {searchResults.length === 0 ? (
        <div className="search-form">
          <h2>Je recherche une huile essentielle </h2>
          <CategoryList
            items={getCategories()}
            onChange={handleCategoryChange}
          />
          <div>
            <button type="button" className="search-btn" onClick={handleSearch}>
              Je lance ma recherche
            </button>
          </div>
          <Suspense fallback={<div>chargement...</div>}>
            {symptomsByCategory.length > 0 && (
              <h3>Pour quelles problématiques: </h3>
            )}
            <SymptomList
              symptoms={symptomsByCategory}
              onChange={handleSymptomsChange}
            />
          </Suspense>
        </div>
      ) : (
        <div className="search-result">
          <Suspense fallback={[]}>
            <OilList oils={searchResults} />
          </Suspense>
        </div>
      )}
    </div>
  );
};

Search.propTypes = {
  options: PropTypes.array.isRequired,
  match: PropTypes.object
};

export default Search;
