const {NotFound} = require('http-errors');
const contactsOperations = require('../../model/index');

const getContactById = async (req, res) => {
    const {id} = req.params;
    const result = await contactsOperations.getContactById(id);
    if(!result) {
        throw new NotFound(`Contact wid id=${id} not found`)
    }
    res.json({
        status: 'success',
        code: 200,
        data: {
            result
        }
    })
}

module.exports = getContactById;