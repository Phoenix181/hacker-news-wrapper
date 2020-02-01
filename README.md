# Hacker News Wrapper

This is a promise based wrapper for the YCombinator's Hacker News [API](https://github.com/HackerNews/API).

```js
const hackerNews = require('hacker-news-wrapper');

hackerNews.fetchTopStories().then(topStories => {
    hackerNews.fetchItem(topStories[0]).then(item => {
        console.log(item);
    });
});
```


## Installation

This is [Node.js](https://nodejs.org/en/) module. Currently it's not available through [npm registry](https://www.npmjs.com/)

Download the latest release from [releases](./releases) page or clone the [repository](.)

```bash
npm install hacker-news-wrapper.tar.gz
```
or 
```bash 
npm install hacker-news-wrapper/
```

I haven't tried with [yarn](https://yarnpkg.com/) but it could work with it also.

## Documentation

View the [documentation](./docs/docs.md) for more information

## License

The project is licensed under [MIT liscense](./LICENSE).