const { BadRequest } = require('http-errors')
const { Contact } = require('../../models')

const listContacts = async (req, res) => {
  const { _id } = req.user
  const { page = 1, limit = 5, favorite } = req.query
  if (typeof page !== 'number' || typeof limit !== 'number') {
    throw new BadRequest('Page and limit must be numbers')
  }
  const skip = (page - 1) * limit
  let filter = { owner: _id }
  if (favorite) {
    filter = { owner: _id, favorite }
  }
  const contacts = await Contact.find(filter, '', { skip, limit: Number(limit) }).populate('owner', '_id email')
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contacts
    }
  })
}

module.exports = listContacts
