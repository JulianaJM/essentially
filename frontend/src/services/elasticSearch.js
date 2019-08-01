import axios from "axios";

export default class ElasticSearchService {
  static search(terms) {
    return axios.get("/search", {
      params: {
        value: terms
      }
    });
  }

  static searchByName(name) {
    return axios.get("/searchByName", {
      params: {
        value: name
      }
    });
  }
}
