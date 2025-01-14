const { Schema, SchemaTypes, model } = require('mongoose')
const Joi = require('joi')

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    enum: [true, false],
    default: false,
  },
  owner: {
    type: SchemaTypes.ObjectId,
    ref: 'user',
    required: true
  }
}, { versionKey: false, timestamps: true })

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
  favorite: Joi.boolean().valid(true, false),
})

const statusJoiSchema = Joi.object({
  favorite: Joi.boolean().valid(true, false).required()
})

const Contact = model('contact', contactSchema)

module.exports = {
  Contact,
  joiSchema,
  statusJoiSchema,
}
