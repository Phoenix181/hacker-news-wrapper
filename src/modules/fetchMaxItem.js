const request = require('./request');

module.exports = function () {
    const requestUrl = `https://hacker-news.firebaseio.com/v0/maxitem.json`;

    return request(requestUrl);
}