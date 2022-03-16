# medium2json
Converts your Medium.com profile's posts into a JSON object.

## How to Install

Run `npm i medium2json` in your project directory.

## How to Use

You can use its `getPosts` function to get the posts for a particular user, all you need is a username.
```
const medium2json = require('medium2json');

async function getObj (username) {
  let posts = await medium2json.getPosts(username);
  console.log(posts)
}

getObj('andretaiwx');
```

## Note

Medium.com's RSS feed does not return all the posts for a particular user, just 10 IIRC.

## Links

GitHub - https://github.com/andretai/medium2json.git

npmjs.com - https://www.npmjs.com/package/medium2json
