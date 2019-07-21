const client = require('../datasource/connection');

// const healthCheck = () => client.cluster.health();

const search = () => {
  searchRequest()
    .then(res => {
      // console.log('heheheeh');
      // console.log(res.hits.hits);
    })
    .catch(err => {
      // console.log('hihihihih', err);
    });
};

const searchRequest = () => {
  const payload = {
    query: {
      match: {
        oil: 'copahu'
      }
    }
  };
  return client.search({
    index: 'oils',
    body: payload
  });
};

search();
