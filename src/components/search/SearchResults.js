import React, { Suspense, lazy, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
const OilList = lazy(() => import('../oil-result/OilList'));
import { search } from '../../services/elasticsearch';
import log from 'log';

import './search.scss';

const SearchResults = ({ location }) => {
  /* const [symptomsByCategory, setSymptomsByCategory] = useState([]);
  const [selectedSymptoms, setSeletedSymptoms] = useState([]); */
  const [searchResults, setSearchResults] = useState([]);

  const getSearchValues = () => {
    const queryParamString = location.search
      ? location.search.split('=')[1]
      : '';
    const queryParams = queryParamString.split(/[\s,]+/);

    return queryParams.map(param => {
      const decode = decodeURI(param);
      return decode.trim();
    });
  };
  useEffect(() => {
    const terms = getSearchValues();
    if (terms.length > 0) {
      search(terms)
        .then(res => {
          setSearchResults(res.hits.hits);
        })
        .catch(err => {
          log.error('error during search', err);
        });
    }
  }, [location.search]);

  return (
    <div className="search">
      <div className="search-result">
        <Suspense fallback={[]}>
          <OilList oils={searchResults} />
        </Suspense>
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  options: PropTypes.array.isRequired,
  match: PropTypes.object,
  location: PropTypes.object
};

export default withRouter(SearchResults);
