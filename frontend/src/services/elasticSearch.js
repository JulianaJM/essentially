import axios from "axios";

export default class ElasticSearchService {
  static search(terms, offset) {
    return axios.get("/search", {
      params: {
        value: terms,
        offset,
      },
    });
  }

  static searchByName(name) {
    return axios.get("/searchByName", {
      params: {
        value: name,
      },
    });
  }

  static getRandom() {
    return axios.get("/random");
  }
}
