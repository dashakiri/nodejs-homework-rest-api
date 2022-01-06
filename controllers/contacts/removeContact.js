const { NotFound } = require('http-errors')
const { Contact } = require('../../models')

const removeContact = async (req, res) => {
  const { _id: userId } = req.user
  const { contactId } = req.params
  const result = await Contact.findOneAndRemove({ _id: contactId, owner: userId })
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'contact deleted',
    data: {
      result
    }
  })
}

module.exports = removeContact
