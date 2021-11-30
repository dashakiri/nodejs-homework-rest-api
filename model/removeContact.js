const listContacts = require('./listContacts');
const updateContact = require('./updateContact');

const removeContact = async(contactId) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(contact => String(contact.id) === String(contactId));
    if(index === -1) {
        return null;
    }
    const [removeContact] = contacts.splice(index, 1);
    await updateContact(contacts);
    return removeContact;
}

module.exports = removeContact;