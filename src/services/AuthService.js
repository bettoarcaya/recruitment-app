import axios from 'axios';
const url = 'http://recruitment-api.test:40/api/v1';

export default {

  login (credentials) {
    return axios
        .post(`${url}/login`, credentials)
        .then(response => response.data)
        .catch(error => error.response.data);
  }

};