const medium2json = require('./index')

async function getPosts (username) {
  let posts = await medium2json.getPosts(username)
  console.log("Test returned", posts.length, "post(s) successfully.\n")
}

async function getFeed (username) {
  let feed = await medium2json.getFeed(username)
  console.log("Test returned", Object.keys(feed), "successfully.\n")
}

const username = 'andretaiwx'

getPosts(username)

getFeed(username)

