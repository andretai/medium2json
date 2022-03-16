const fetch = require('node-fetch')

const getPosts = async (username) => {
  let posts = []
  const feedURL = `https://medium.com/feed/@${username}`
  const toolURL = `https://api.rss2json.com/v1/api.json?rss_url=${feedURL}`
  await fetch(toolURL)
    .then(response => response.json())
    .then(data => posts = data.items)
    .catch(err => console.log(err))
  return posts
}

const getFeed = async (username) => {
  let feed = {}
  const feedURL = `https://medium.com/feed/@${username}`
  const toolURL = `https://api.rss2json.com/v1/api.json?rss_url=${feedURL}`
  await fetch(toolURL)
    .then(response => response.json())
    .then(data => feed = data.feed)
    .catch(err => console.log(err))
  return feed
}

module.exports = { getPosts, getFeed }
