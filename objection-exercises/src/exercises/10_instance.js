const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')


const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const lewis = await User.query().findById('7fb5ebaf-875c-41c9-a4df-f601da9824c4');
  // Use that instance to create a new pet related that user
  const corkie = await lewis.$relatedQuery('pet').insert({ type: 'DOG', name: 'Corkie' }).returning('*')
  // Use that instance to get all of the user's pets and children
  const owner = await corkie.$fetchGraph('[owner]')
  const family = await owner.owner.$fetchGraph('[pet, child]')
  console.log(family)
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph

  // -----
  cleanup()
}

run()
