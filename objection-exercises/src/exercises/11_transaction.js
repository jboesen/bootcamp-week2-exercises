const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')


const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  const userPet = await User.transaction(async trx => {
    try {
      // console.log('top of program')
      const cw = await User.query(trx)
        .insert({ firstName: 'CW', lastName: 'McCall', email: 'cw@gmail.com' }).returning('*')
      const sloan = await cw.$relatedQuery('pet', trx)
        .insert({ 'type': 'DOG', name: 'Sloan' })
      // console.log(sloan)
      // total number of cw's pets or in the db? 
      // console.log(`id: ${cw.id}`)
      const cwPets = await cw.$relatedQuery('pet', trx)
      // console.log(cwPets)
      // const birdCount = await Pet.query().resultSize()
      if (cwPets.length > 15) {
        await Pet.query().delete().where({ 'type': 'BIRD' })
      }
      return cwPets.length
    }
    catch (err) {
      console.log(`Something went wrong...: ${err}`)
    }
  })

  console.log(`CW now has ${userPet} pets!`);

  // -----
  cleanup()
}

run()
