const client = require("../datasource/connection");

const SIZE = 200;
const INDEX = "oils";
const searchRequest = terms => {
  let queryString = "";
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
        minimum_should_match: 2,
        fields: [
          "name",
          "ideal",
          "health.synergies",
          "mood.synergies",
          "beauty.synergies",
          "health.properties",
          "mood.properties",
          "beauty.properties",
          "health.indicationsDesc",
          "mood.indicationsDesc",
          "beauty.indicationsDesc",
          "health.indications",
          "mood.indications",
          "beauty.indications"
        ]
      }
    }
  };
  return client.search({
    index: INDEX,
    body: payload
  });
};

module.exports = {
  search: function(terms) {
    console.log(terms);
    return searchRequest(terms);
  },

  searchByName: function(name) {
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
  }
};
