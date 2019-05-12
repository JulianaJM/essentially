import React, { Suspense, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CategoryList from '../radio-button/RadioButtonList';
const SymptomList = React.lazy(() => import('../symptom/SymptomList'));
const OilList = React.lazy(() => import('../oil-result/OilList'));

const Search = ({ options, match }) => {
  const [symptomsByCategory, setSymptomsByCategory] = useState([]);
  const [selectedSymptoms, setSeletedSymptoms] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (match) {
      const { params } = match;
      searchOil(params.name);
    }
  }, [options, match]);

  const searchOil = name => {
    const { oils } = options;
    const result = oils.filter(item => {
      const currentName = item.name;
      return currentName.match(name);
    });

    setSearchResults(result);
  };

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
    const symptomsByCategory = symptoms.filter(
      option => option.category === category
    );
    setSymptomsByCategory(symptomsByCategory);
  };

  const handleSymptomsChange = event => {
    const value = event.target.value;
    const newSelectedSymptoms = [...selectedSymptoms];
    if (!newSelectedSymptoms.includes(value)) {
      newSelectedSymptoms.push(value);
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
      .filter(item => item !== undefined);

    setSearchResults(result);
  };
  return (
    <div className="search">
      {searchResults.length === 0 ? (
        <div className="search-form">
          <h2>Rechercher</h2>
          <CategoryList
            items={getCategories()}
            onChange={handleCategoryChange}
          />
          <Suspense fallback={null}>
            <SymptomList
              symptoms={symptomsByCategory}
              onChange={handleSymptomsChange}
            />
          </Suspense>
          <div className="search-btn">
            <button type="button" onClick={handleSearch}>
              Je lance ma recherche
            </button>
          </div>
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
