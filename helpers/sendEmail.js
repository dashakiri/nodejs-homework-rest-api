const sgMail = require('@sendgrid/mail')
require('dotenv').config()
const {SENDGRID_API} = process.env

sgMail.setApiKey(SENDGRID_API)

const sendEmail = async(data) => {
    const email = {...data, from: 'dkirienko25@gmail.com'}
    try {
        await sgMail.send(email)
        return true
    } catch (errro) {
        throw error
    }
}

module.exports = sendEmail
