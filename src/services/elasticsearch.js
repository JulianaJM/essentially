import client from '../datasource/connection';

// const healthCheck = () => client.cluster.health();

const SIZE = 200;
const INDEX = 'oils';

export const search = term => {
  return searchRequest(term);
};

const searchRequest = terms => {
  let queryString = '';
  terms.forEach((t, i) => {
    if (t) {
      if (i === terms.length - 1) {
        queryString += `(${t}~)`;
      } else {
        queryString += `(${t}~) OR `;
      }
    }
  });

  const payload = {
    size: SIZE,
    query: {
      query_string: {
        query: queryString,
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
        ]
      }
    }
  };
  return client.search({
    index: INDEX,
    body: payload
  });
};

export const searchByName = name => {
  return client.search({
    index: INDEX,
    body: {
      size: SIZE,
      query: {
        match_phrase: {
          name
        }
      }
    }
  });
};
