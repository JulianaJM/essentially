import axios from "axios";

export const search = (terms, offset) => {
  return axios.get(`${process.env.API_URL}/api/oils/results`, {
    params: {
      values: terms,
      offset,
    },
  });
};

export const searchByName = name => {
  return axios.get(`${process.env.API_URL}/api/oils/name`, {
    params: {
      value: name,
    },
  });
};

export const getRandom = () => {
  return axios.get(`${process.env.API_URL}/api/oils/randomlist`);
};
