import client from '../datasource/connection';
import log from 'log';

// const healthCheck = () => client.cluster.health();

export const search = term => {
  searchRequest(term)
    .then(res => {
      return res.hits.hits;
    })
    .catch(err => {
      log.error('error during search', err);
    });
};

const searchRequest = term => {
  const payload = {
    query: {
      multi_match: {
        fields: [
          'name',
          'ideal',
          'health.synergies',
          'mood.synergies',
          'beauty.synergies',
          'health.properties',
          'mood.properties',
          'beauty.properties',
          'health.indicationsDesc',
          'mood.indicationsDesc',
          'beauty.indicationsDesc',
          'health.indications',
          'mood.indications',
          'beauty.indications'
        ],
        query: term,
        fuzziness: 'AUTO'
      }
    }
  };
  return client.search({
    index: 'oils',
    body: payload
  });
};
