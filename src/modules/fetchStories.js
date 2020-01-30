const request = require('./request');

exports.fetchTopStories = function () {
    const requestUrl = `https://hacker-news.firebaseio.com/v0/topstories.json`;

    return request(requestUrl);
}

exports.fetchNewStories = function () {
    const requestUrl = `https://hacker-news.firebaseio.com/v0/newstories.json`;

    return request(requestUrl);
}

exports.fetchBestStories = function () {
    const requestUrl = `https://hacker-news.firebaseio.com/v0/beststories.json`;

    return request(requestUrl);
}

exports.fetchAskStories = function () {
    const requestUrl = `https://hacker-news.firebaseio.com/v0/askstories.json`;

    return request(requestUrl);
}

exports.fetchShowStories = function () {
    const requestUrl = `https://hacker-news.firebaseio.com/v0/showstories.json`;

    return request(requestUrl);
}

exports.fetchJobStories = function () {
    const requestUrl = `https://hacker-news.firebaseio.com/v0/jobstories.json`;

    return request(requestUrl);
}