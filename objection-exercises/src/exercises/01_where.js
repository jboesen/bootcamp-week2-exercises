const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!
  // Get all users with a specific name (pick it from your database)
  let joels = await User.query().where('firstName', 'Thad')
  console.log(joels)
  // Do the same with object notation
  joels = await User.query().where({ 'firstName': 'Thad' })
  console.log(joels)
  // Get all DOGS and BIRDS
  const dogBirds = await Pet.query().whereIn('type', ['DOG', 'BIRD'])
  console.log(dogBirds)


  // -----
  cleanup()
}

run()
