const casual = require('casual')
const userData = require('./users')

casual.define('friendship', ({ friend1, friend2 }) => ({
  requestor: friend1,
  requested: friend2,
  status: casual.random_element(['REJECTED', 'ACCEPTED', 'PENDING']),
}))


const friendData = []

for (let i = 0; i < 20; ++i) {
  const friend1 = casual.random_element(userData).id
  const friend2 = casual.random_element(userData).id
  friendData.push(casual.friendship({ friend1, friend2 }))
}

friendData.forEach(e => console.log(e))
module.exports = friendData
