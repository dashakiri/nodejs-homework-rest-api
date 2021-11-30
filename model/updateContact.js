const fs = require('fs/promises');
const contactsPath = require('./filePath');

const updateContact = async(contacts) => {
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
}

module.exports = updateContact;