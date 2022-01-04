const { NotFound } = require('http-errors')
const { Contact } = require('../../models')

const updateStatusContact = async (req, res) => {
  const { _id: userId } = req.user
  const { contactId } = req.params
  const { favorite } = req.body
  const result = await Contact.findOneAndUpdate({ _id: contactId, owner: userId }, { favorite }, { new: true })
  if (!result) {
    throw new NotFound('missing field favorite')
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = updateStatusContact
