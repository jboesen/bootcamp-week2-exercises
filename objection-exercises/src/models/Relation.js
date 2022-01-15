const BaseModel = require('./BaseModel')
const { ManyToManyRelation, Model } = require('objection')

class User extends BaseModel {
    static get tableName() {
        return 'relations'
    }
}


module.exports = User
