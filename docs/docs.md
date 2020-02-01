# Documentation

## Usage

Import the module in the required file to access the [methods](docs.md#Methods) below.

```js
const hackerNews = require('hacker-news-wrapper');
```

## Methods

### Contents:
1. [fetchItem(itemId)](docs.md#fetchitemitemid)
2. [fetchUser(userNickname)](docs.md#fetchuserusernickname)
3. [fetchMaxItem()](docs.md#fetchmaxitem)
4. [fetchTopStories()](docs.md#fetchtopstories)
5. [fetchNewStories()](docs.md#fetchnewstories)
6. [fetchBestStories()](docs.md#fetchbeststories)
7. [fetchAskStories()](docs.md#fetchaskstories)
8. [fetchShowStories()](docs.md#fetchshowstories)

### fetchItem(itemId)

The function fetches the item of the specified `itemId`. The item maybe a story, comment, ask, job or poll.

##### Parameter:

`itemId` - The id of the item to be returned.

##### Returns:

Returns an object with following properties:

Field | Description
------|------------
**id** | The item's unique id.
deleted | `true` if the item is deleted.
type | The type of item. One of "job", "story", "comment", "poll", or "pollopt".
by | The username of the item's author.
time | Creation date of the item, in [Unix Time](http://en.wikipedia.org/wiki/Unix_time).
text | The comment, story or poll text. HTML.
dead | `true` if the item is dead.
parent | The comment's parent: either another comment or the relevant story.
poll | The pollopt's associated poll.
kids | The ids of the item's comments, in ranked display order.
url | The URL of the story.
score | The story's score, or the votes for a pollopt.
title | The title of the story, poll or job. HTML.
parts | A list of related pollopts, in display order.
descendants | In the case of stories or polls, the total comment count.

```js
hackerNews.fetchItem(9002).then(item => {
    conole.log(item);
 });

(async () => {
    const item = await hackerNews.fetchItem(9002);
    console.log(item);
}) ();
```

### fetchUser(userNickname)

The function fetches the information about the user with the specified `userNickName`. The nick name is case-sensitive. 
Only users with public activity can retrieved.

##### Parameter:

`userNickname` - The nick name of the user to be returned.

##### Returns:

Returns an object with following properties:

Field | Description
------|------------
**id** | The user's unique username. Case-sensitive. Required.
delay | Delay in minutes between a comment's creation and its visibility to other users.
**created** | Creation date of the user, in [Unix Time](http://en.wikipedia.org/wiki/Unix_time).
**karma** | The user's karma.
about | The user's optional self-description. HTML.
submitted | List of the user's stories, polls and comments.

```js
hackerNews.fetchUser('hackerNews').then(item => {
    console.log(item);
});

(async () => {
    const item = await hackerNews.fetchUser('hackerNews');
    console.log(item);
}) ();
```

### fetchMaxItem()

The function fetches the current largest `itemId`. You can walk backward from the here to discover all items.

##### Returns:
Returns an number with the current largest `itemId`.

```js
(async () => {
    const maxItemId = await hackerNews.fetchMaxItem();
    console.log(maxItemId)
}) ();
```

### fetchTopStories() 

The function fetches the `itemId` of top items.

##### Returns:
Returns an array of length 500 with `itemId` of top stories.

### fetchNewStories() 

The function fetches the `itemId` of latest items.

##### Returns:
Returns an array of length 500 with `itemId` of new stories.

### fetchBestStories() 

The function fetches the `itemId` of best items.

##### Returns:
Returns an array of length 500 with `itemId` of best stories.

```js
(async () => {
    const topStories = await hackerNews.fetchTopStories();
    const topStory = await hackerNews.fetchItem(topStories[0]);

    const newStories = await hackerNews.fetchNewStories();
    const newStory = await hackerNews.fetchItem(newStories[0]);

    const bestStories = await hackerNews.fetchBestStores();
    const bestStory = await hackerNews.fetchItem(bestStories[0]);

    console.log(topStory);
    console.log(newStory);
    console.log(bestStory);
}) ();
```

### fetchAskStories()

The function fetches the `itemId` of multiple AskHN stories.

##### Returns:
Returns an array of length 200 with `itemId` of top AskHN stories.

### fetchShowStories()

The function fetches the `itemId` of multiple ShowHN stores.

##### Returns:
Returns an array of lenght 200 with `itemId` of top ShowHN stories.


```js
(async () => {
    const topAskStory = (await hackerNews.fetchAskStories())[0];

    const topShowStory = (await hackerNews.fetchShowStories())[0];

    console.log(topAskStory);
    console.log(topShowStory);
}) ();
```