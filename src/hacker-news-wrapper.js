const fetchItem = require('./modules/fetchItem');
const fetchUser = require('./modules/fetchUser');
const fetchMaxItem = require('./modules/fetchMaxItem');
const fetchStories = require('./modules/fetchStories');

exports.fetchItem = fetchItem;
exports.fetchUser = fetchUser;
exports.fetchMaxItem = fetchMaxItem;

exports.fetchTopStories = fetchStories.fetchTopStories;
exports.fetchNewStories = fetchStories.fetchNewStories;
exports.fetchBestStories = fetchStories.fetchBestStories;
exports.fetchAskStories = fetchStories.fetchAskStories;
exports.fetchShowStories = fetchStories.fetchShowStories;