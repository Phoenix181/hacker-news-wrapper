const request = require('./request');

module.exports = function (userID) {
    const requestUrl = `https://hacker-news.firebaseio.com/v0/user/${userID}.json`;

    return request(requestUrl);
}