const contactsOperations = require('../../model/index');

const listContacts = async (req, res) => {
    const contacts = await contactsOperations.listContacts();
    console.log(req.params);
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: contacts
        }
    });
};

module.exports = listContacts;