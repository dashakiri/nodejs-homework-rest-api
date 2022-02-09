const { User } = require('../../models')

const logout = async(req, res) => {
  const { email } = req.user
  await User.findOneAndUpdate(email, { token: null })
  res.status(204).json()
}

module.exports = logout
