const BaseModel = require('./BaseModel')
const { HasOneRelation, ManyToManyRelation, Model } = require('objection')
const User = require('./User')

class Pet extends Model {
    static get tableName() {
        return 'pets'
    }

    static get relationMappings() {
        const Pet = require('./Pet')
        return {
            owner: {
                relation: HasOneRelation,
                modelClass: User,
                join: {
                    from: 'pets.ownerId',
                    to: 'users.id',
                },
            },
        }
    }
}

module.exports = Pet
