const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the first 5 users, ordered by lastName
  const usersByLasts = await User.query().orderBy('lastName').limit(5)
  // console.log(usersByLasts)
  // Get the second 5 users, ordered by lastName
  const secondUsersByLasts = await User.query().orderBy('lastName').limit(5).offset(10)
  console.log(secondUsersByLasts)
  // -----
  cleanup()
}

run()
