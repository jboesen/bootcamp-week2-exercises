const casual = require('casual')
const userData = require('./users')

casual.define('post', ({ authorID }) => ({
  author: authorID,
  id: casual.uuid,
  post: casual.sentences(2),
}))

const postsData = []

for (let i = 0; i < 20; ++i) {
  const authorID = casual.random_element(userData).id
  console.log(`author: ${authorID}`)
  postsData.push(casual.post({ authorID }))
}

console.log(postsData)
module.exports = postsData
