
exports.up = async knex => knex.schema.createTable('friends', table => {
    table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'))
        .unique()

    table
        .uuid('requestor')
        .references('users.id')
        .notNullable()

    table
        .uuid('requested')
        .references('users.id')
        .notNullable()

    table
        .enum('status', ['REJECTED', 'ACCEPTED', 'PENDING'])
        .notNullable()

    table
        .timestamp('dateRequested')
});

exports.down = async knex => knex.schema.dropTableIfExists('friends')
