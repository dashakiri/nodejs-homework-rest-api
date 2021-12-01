const { NotFound } = require('http-errors')
const contactsOperations = require('../../model/index')

const updateContact = async (req, res) => {
  const { contactId } = req.params
  const result = await contactsOperations.updateContact(contactId, req.body)
  if (!result) {
    throw new NotFound(`Product with id=${contactId} not found`)
  }
  req.json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = updateContact
