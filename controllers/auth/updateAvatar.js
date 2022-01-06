const path = require('path')
const fs = require('fs/promises')
const { User } = require('../../models')
const { HOST, PORT = 3000 } = process.env

const avatarDir = path.join(__dirname, '../../', 'public', 'avatars')
const updateAvatar = async(req, res) => {
  const { path: tempUpload, originalname } = req.file
  const { _id: id } = req.user
  const imageName = `${id}_${originalname}`
  try {
    const resultUpload = path.join(avatarDir, imageName)
    await fs.rename(tempUpload, resultUpload)
    const avatarURL = path.join(`${HOST}:${PORT}`, 'public', 'avatars', imageName)
    console.log(avatarURL)
    await User.findOneAndUpdate({ _id: req.user._id }, { avatarURL }, { new: true, runValidators: true })
    res.json({ avatarURL })
  } catch (error) {
    await fs.unlink(tempUpload)
    throw error
  }
}

module.exports = updateAvatar
