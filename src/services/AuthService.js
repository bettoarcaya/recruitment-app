export default {

  login (credentials) {
    return this.$http
        .post(`${this.$baseUrl}/login`)
        .then(response => response.data);
  }

};