const casual = require('casual')
const userData = require('./users')
const postsData = require('./posts')

casual.define('like', ({ postID, likerID }) => ({
  id: casual.uuid,
  liker: likerID,
  post: postID,
}))


const likeData = []

for (let i = 0; i < 20; ++i) {
  likerID = casual.random_element(userData).id
  postID = casual.random_element(postsData).id
  likeData.push(casual.like({ postID, likerID }))
}

module.exports = likeData
