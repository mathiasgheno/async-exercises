const superagent = require('superagent');

const url = 'https://api.github.com/users/Mathias54';

module.exports = (callback) => superagent
    .get(url)
    .set('User-Agent', 'mathias')
    .end((err, res) => {
        callback(err, res.body);
    });

