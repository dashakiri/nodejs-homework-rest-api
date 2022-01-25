const { Conflict } = require('http-errors')
const { User } = require('../../models')
const gravatar = require('gravatar')
const { v4 } = require('uuid')
const sendEmail = require('../../helpers')
require('dotenv').config()
// const { PORT = 3000 } = process.env
const host = 'https://floating-atoll-23449.herokuapp.com/'

const register = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict(`User with ${email} already exist`)
  }
  const avatarURL = gravatar.url(email, { protocol: 'https' })
  const verificationToken = v4()
  const newUser = new User({ email, avatarURL, verificationToken })
  newUser.setPassword(password)
  await newUser.save()

  const mail = {
    to: email,
    subject: 'email verification',
    html: `<a target='blank' href='${host}api/users/verify/${verificationToken}'>Verify email</a>`
  }

  await sendEmail(mail)

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        avatarURL,
        verificationToken,
      }
    }
  })
}

module.exports = register
