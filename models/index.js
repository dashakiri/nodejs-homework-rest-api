const { Contact } = require('./contacts')
const { joiSchema } = require('./contacts')
const { statusJoiSchema } = require('./contacts')
const { User } = require('./user')
const { joiUserSchema } = require('./user')

module.exports = {
  Contact,
  joiSchema,
  statusJoiSchema,
  User,
  joiUserSchema
}
