const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  // await User.query().insert({
  //   firstName: 'John',
  //   lastName: 'Boesen',
  //   email: 'jmboesen@protonmail.com'
  // })

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  await Pet.query().insert({
    ownerId: '3365009e-fe88-4f39-bf37-e29e99a15a76',
    type: 'DOG',
    name: 'Spot'
  }).returning('*')

  // -----
  cleanup()
}

run()
