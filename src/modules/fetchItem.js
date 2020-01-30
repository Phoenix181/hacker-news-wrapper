const request = require('./request');

module.exports = function (itemId) {
    const requestUrl = `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`;
    
    return request(requestUrl);
}