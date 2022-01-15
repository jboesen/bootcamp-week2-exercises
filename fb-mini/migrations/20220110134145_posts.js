
exports.up = async knex => knex.schema.createTable('posts', table => {
    table
        .uuid('author')
        .notNullable()
        .references('users.id')

    table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
        .string('post')
        .notNullable()

    table.timestamps(true)
});

exports.down = async knex => knex.schema.dropTableIfExists('posts')
