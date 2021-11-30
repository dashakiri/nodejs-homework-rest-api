const {NotFound} = require('http-errors');
const contactsOperations = require('../../model/index');

const updateContact = async (req, res) => {
    const {id} = req.params;
    const result = await contactsOperations.updateContact(id, req.body);
    if(!result) {
        throw new NotFound(`Product with id=${id} not found`);
    }
    req.json({
        status: 'success',
        code: 200,
        data: {
            result
        }
    })
}

module.exports = updateContact;