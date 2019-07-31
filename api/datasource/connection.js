const { Client } = require("elasticsearch");
const client = new Client({
  host: process.env.ELASTICSEARCH_URI
  // log: 'trace'
});

module.exports = client;
