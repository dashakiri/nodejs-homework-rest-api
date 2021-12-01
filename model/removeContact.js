const listContacts = require('./listContacts')
const fs = require('fs/promises')
const contactsPath = require('./filePath')

const removeContact = async(contactId) => {
  const contacts = await listContacts()
  const index = contacts.findIndex(contact => String(contact.id) === String(contactId))
  if (index === -1) {
    return null
  }
  const [removeContact] = contacts.splice(index, 1)
  await fs.writeFile(contactsPath, JSON.stringify(contacts))
  return removeContact
}

module.exports = removeContact
