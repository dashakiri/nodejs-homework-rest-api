const { NotFound } = require('http-errors')
const contactsOperations = require('../../model/index')

const removeContact = async (req, res) => {
  const { id } = req.params
  const result = await contactsOperations.removeContact()
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`)
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
