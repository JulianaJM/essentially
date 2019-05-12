import React, { Suspense, useState } from 'react';
import PropTypes from 'prop-types';
import CategoryList from '../radio-button/RadioButtonList';
const SymptomList = React.lazy(() => import('../symptom/SymptomList'));

const Search = ({ options, onSearch }) => {
  const [symptomsByCategory, setSymptomsByCategory] = useState([]);
  const [selectedSymptoms, setSeletedSymptoms] = useState([]);

  const getCategories = () => {
    const categories = [];
    options &&
      options.forEach(option => {
        if (!categories.includes(option.category)) {
          categories.push(option.category);
        }
      });
    return categories;
  };

  const handleCategoryChange = event => {
    setSeletedSymptoms([]);
    const category = event.target.value;
    const symptomsByCategory = options.filter(
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
    onSearch(selectedSymptoms);
  };
  return (
    <div className="search">
      <h2>Rechercher</h2>
      <CategoryList items={getCategories()} onChange={handleCategoryChange} />
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
  );
};

Search.propTypes = {
  options: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default Search;
