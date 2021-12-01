const fs = require('fs/promises')
const listContacts = require('./listContacts')
const contactsPath = require('./filePath')

const updateContact = async(contactId, data) => {
  const contacts = await listContacts()
  const index = contacts.findIndex(contact => String(contact.id) === String(contactId))
  if (index === -1) {
    return null
  }
  contacts[index] = { ...data, contactId }
  await fs.writeFile(contactsPath, JSON.stringify(contacts))
  return contacts[index]
}

module.exports = updateContact
