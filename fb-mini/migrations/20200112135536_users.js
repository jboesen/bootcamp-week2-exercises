exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()

  table
    .string('firstName')
    .notNullable()

  table
    .string('lastName')
    .notNullable()

  table
    .string('bio')

  table
    .string('password')

  table
    .datetime('dob')

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
