const BaseModel = require('./BaseModel')
const { HasManyRelation, ManyToManyRelation } = require('./BaseModel')
// const { Model } = require('objection')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get virtualAttributes() {
    return ['isMinor', 'isHarvardAffiliate']
  }

  isMinor() {
    return this.age < 18;
  }

  isHarvardAffiliate() {
    // how would I do these for joined attributes???
    return this.email.includes('.harvard.edu')
  }

  static get relationMappings() {
    const Pet = require('./Pet')
    const User = require('./User')
    return {
      pet: {
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId',
        },
      },
      parent: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.childId',
            to: 'relations.parentId'
          },
          to: 'users.id'
        }
      },
      child: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.parentId',
            to: 'relations.childId'
          },
          to: 'users.id'
        }
      }
    }
  }
}

module.exports = User
