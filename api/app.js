require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const elasticsearch = require("./datasource/connection");
const elasticsearchService = require("./services/elasticsearch");
const logger = require("morgan");
const path = require("path");

const app = express();

// ping the client to be sure Elasticsearch is up
elasticsearch.ping(
  {
    requestTimeout: 30000
  },
  function(error) {
    // at this point, eastic search is down, please check your Elasticsearch service
    if (error) {
      console.error("elasticsearch cluster is down!");
    } else {
      console.log("elasticsearch cluster is ok");
    }
  }
);

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// define the /search route that should return elastic search results
app.get("/search", function(req, res) {
  elasticsearchService
    .search(req.query.value)
    .then(results => res.json(results.hits.hits))
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

app.get("/searchByName", function(req, res) {
  elasticsearchService
    .searchByName(req.query.value)
    .then(results => res.json(results.hits.hits))
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  console.log(err, res, req);
  // send the error
  res.status(err.status || 500);
  res.json({ message: err.message });
});

module.exports = app;
