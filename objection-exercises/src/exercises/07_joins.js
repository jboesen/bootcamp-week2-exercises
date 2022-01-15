const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const Relation = require('../models/Relation')


const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const pets = await User.query()
    .withGraphFetched('pet');

  // Get all users, their pets, AND their children
  const babiesAndPuppies = await User.query()
    .withGraphFetched('pet')
    .withGraphFetched('child');
  // console.log(babiesAndPuppies)
  // Get all users, their parents, and their grandparents
  const intergenerational = await User.query()
    .withGraphFetched('parent.parent')
  // console.log(intergenerational)
  // Get all users, their pets, their chilren, and their childrens' pets
  const veryIntergenerational = await User.query()
    .withGraphFetched('[pet, child.pet]')
  // console.log(veryIntergenerational)


  // -----
  cleanup()
}

run()
