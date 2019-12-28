const axios = require('axios');

const url = 'https://api.github.com/users/Mathias54';

module.exports = () => axios
    .get(url)
    .then(response => response.data);