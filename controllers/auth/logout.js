const { User } = require('../../models')

const logout = async(req, res) => {
  const { email } = req.user
  await User.findByIdAndUpdate(email, { token: null })
  res.status(204).json()
}

module.exports = logout
