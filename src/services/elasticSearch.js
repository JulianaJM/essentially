import axios from "axios";

const URL_PREFIX = `${process.env.API_URL}/api`;

export const search = (terms, offset) => {
  return axios.get(`${URL_PREFIX}/oils/results`, {
    params: {
      values: terms,
      offset,
    },
  });
};

export const searchByName = name => {
  return axios.get(`${URL_PREFIX}/oils/name`, {
    params: {
      value: name,
    },
  });
};

export const getRandomOils = () => {
  return axios.get(`${URL_PREFIX}/oils/randomlist`);
};

export const getSuggestions = inputVal => {
  return axios.get(`${URL_PREFIX}/oils/suggestions`, {
    params: {
      value: inputVal,
    },
  });
};
