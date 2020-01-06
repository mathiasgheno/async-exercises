const axios = require('axios');
const superagent = require('superagent');

const url = 'https://api.github.com/users/';

module.exports = {
    getGithubAccountByUserNamePromise: (userName) => axios
        .get(`${url}${userName}`)
        .then(response => response.data),
    getGithubAccountsByUserNameCallback: (userName, callback) => superagent
        .get(`${url}${userName}`)
        .set('User-Agent', 'mathias')
        .end((err, res) => callback(err, res.body)),
};