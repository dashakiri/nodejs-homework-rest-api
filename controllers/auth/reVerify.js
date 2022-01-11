const { BadRequest, NotFound } = require('http-errors')
const { User } = require('../../models')
const sendEmail = require('../../helpers')
const { v4 } = require('uuid')
require('dotenv').config()
// const { PORT = 3000 } = process.env
const host = 'https://floating-atoll-23449.herokuapp.com/'

const postVerify = async(req, res) => {
  const { email } = req.body
  const user = await User.findOne({ email })

  if (!user) {
    throw NotFound('User not found')
  } else if (user.verify === true) {
    throw BadRequest('Verification has already been passed')
  }

  const verificationToken = v4()
  const mail = {
    to: email,
    subject: 'Email verification',
    html: `<a target='blank' href='${host}/api/users/verify/${verificationToken}'>Verify email</a>`
  }

  await sendEmail(mail)

  await User.findByIdAndUpdate(user._id, { verificationToken })

  res.json({
    status: 'ok',
    code: 200,
    body: {
      message: 'Verification email sent'
    }
  })
}

module.exports = postVerify
