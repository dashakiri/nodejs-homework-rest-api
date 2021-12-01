const listContacts = require('./listContacts')

const getContactById = async(contactId) => {
  const contacts = await listContacts()
  const result = contacts.find(contact => String(contact.id) === String(contactId))
  if (!result) {
    return null
  }
  return result
}

module.exports = getContactById
