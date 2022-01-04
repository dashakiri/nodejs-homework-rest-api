const { NotFound } = require('http-errors')
const { Contact } = require('../../models')

const updateContact = async (req, res) => {
  const { _id: userId } = req.user
  const { contactId } = req.params
  const result = await Contact.findOneAndUpdate({ _id: contactId, owner: userId}, req.body, { new: true })
  if (!result) {
    throw new NotFound(`Product with id=${contactId} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = updateContact
