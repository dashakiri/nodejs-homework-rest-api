// const fs = require('fs/promises')
// const { v4 } = require('uuid')
// const contactsPath = require('./filePath')

// const listContacts = async () => {
//   const data = await fs.readFile(contactsPath)
//   const contacts = JSON.parse(data)
//   return contacts
// }

// const getContactById = async (contactId) => {
//   const contacts = await listContacts()
//   const filteredContact = contacts.find(contact => parseInt(contact.id) === parseInt(contactId));
//   if (!filteredContact) {
//     return null
//   };

//   return filteredContact
// };

// const addContact = async (body) => {
//   const contacts = await listContacts()
//   const newContact = {...body, id: v4()}
//   contacts.push(newContact)
//   await fs.writeFile(contactsPath, JSON.stringify(newContact))
//   return newContact
// }

// const updateContact = async (contactId, body) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex(contact => parseInt(contact.id) === parseInt(contactId));
//   if (index === -1) {
//     return null;
//   };
//   contacts[index] = {...body, contactId};
//   await fs.writeFile(contactsPath, JSON.stringify(contacts));
//   return contacts[index];
// }

// const removeContact = async (contactId) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex(contact => parseInt(contact.id) === parseInt(contactId));
//   if (index === -1) {
//     return null;
//   };

//   const [removeContact] = contacts.splice(index, 1);
//   await updateContact(contacts);
//   return removeContact;
// };

const listContacts = require('./listContacts');
const getContactById = require('./getContactById');
const addContact = require('./addContact');
const updateContact = require('./updateContact');
const removeContact = require('./removeContact');

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
}
