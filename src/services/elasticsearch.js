import client from '../datasource/connection';

// const healthCheck = () => client.cluster.health();

export const search = term => {
  return searchRequest(term);
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

export const searchByName = name => {
  return client.search({
    index: 'oils',
    body: {
      query: {
        match_phrase: {
          name
        }
      }
    }
  });
};
