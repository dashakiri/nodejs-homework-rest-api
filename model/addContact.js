const { v4 } = require('uuid')
const fs = require('fs/promises')
const contactsPath = require('./filePath')
const listContacts = require('./listContacts')

const addContact = async(data) => {
  const contacts = await listContacts()
  const newContact = { ...data, id: v4() }
  contacts.push(newContact)
  await fs.writeFile(contactsPath, JSON.stringify(contacts))
  return newContact
}

module.exports = addContact
