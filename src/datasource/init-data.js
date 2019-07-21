const client = require('./connection.js');
const mapping = require('../resources/oils-details-mapping.json');
const oils = require('../resources/oils-details.json');
const log = require('log');

const createIndexAndMapping = () => {
  return client.indices
    .create({
      index: 'oils'
    })
    .then(() => {
      return client.indices.putMapping({
        index: 'oils',
        body: mapping
      });
    })
    .catch(err => {
      log.error('creation index error', err);
    });
};

const bulk = [];
const makeBulk = (oils, callback) => {
  oils.forEach(oil => {
    bulk.push({ index: { _index: 'oils' } }, { ...oil });
  });
  callback(bulk);
};

var indexall = (madebulk, callback) => {
  client.bulk(
    {
      body: madebulk
    },
    (err, resp /* , status */) => {
      if (err) {
        log.error(err);
      } else {
        callback(resp.items);
      }
    }
  );
};

const initCluster = () => {
  createIndexAndMapping()
    .then(() => {
      makeBulk(oils, response => {
        log.info('Bulk content prepared');
        indexall(response, function(response) {
          log.info(response);
        });
      });
    })
    .catch(err => {
      log.error('bulk crask', err);
    });
};

initCluster();
