const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!
  const homiePeter = await User.query().insertGraph({
    firstName: 'Peter',
    lastName: 'Bynum',
    email: 'pbandjelly@yahoo.com',
    pet:
      [{
        name: 'Rocco',
        type: 'DOG'
      },
      {
        name: 'Rosey',
        type: 'DOG'
      }
      ]
  }).returning('*')
  console.log(homiePeter)


  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey

  // -----
  cleanup()
}

run()
