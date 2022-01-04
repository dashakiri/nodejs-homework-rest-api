const register = require('./register')
const login = require('./login')
const logout = require('./logout')
const getCurrent = require('./getCurrent')
const subscriptionUpdate = require('./subscriptionUpdate')

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  subscriptionUpdate
}
