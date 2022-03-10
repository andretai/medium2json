const medium2json = require('./index')

async function get (username) {
  let posts = await medium2json.getPosts(username)
  console.log("Test returned", posts.length, "post(s) successfully.\n")
}

const username = 'andretaiwx'

get(username)