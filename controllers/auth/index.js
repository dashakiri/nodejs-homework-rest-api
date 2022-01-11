const register = require('./register')
const login = require('./login')
const logout = require('./logout')
const getCurrent = require('./getCurrent')
const subscriptionUpdate = require('./subscriptionUpdate')
const updateAvatar = require('./updateAvatar')
const verifyEmail = require('./verifyEmail')
const reVerify = require('./reVerify')

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  subscriptionUpdate,
  updateAvatar,
  verifyEmail,
  reVerify
}
