import axios from "axios";

export default class ElasticSearchService {
  static search(terms, offset) {
    return axios.get("/api/oils/results", {
      params: {
        values: terms,
        offset,
      },
    });
  }

  static searchByName(name) {
    return axios.get("/api/oils/name", {
      params: {
        value: name,
      },
    });
  }

  static getRandom() {
    return axios.get("/api/oils/randomlist");
  }
}
