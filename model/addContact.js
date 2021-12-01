const { v4 } = require('uuid')

const updateContacts = require('./updateContact')
const listContacts = require('./listContacts')

const addContact = async(data) => {
  const contacts = await listContacts()
  const newContact = { ...data, id: v4() }
  contacts.push(newContact)
  await updateContacts(contacts)
  return newContact
}

module.exports = addContact
