const express = require('express')
const router = express.Router()
const { validation, controllerWrapper } = require('../../middlewares')
const { contactsSchema } = require('../../schemas')
const { contacts: controller } = require('../../controllers')
const validateMiddleware = validation(contactsSchema)

router.get('/', controllerWrapper(controller.listContacts))

router.get('/:contactId', controllerWrapper(controller.getContactById))

router.post('/', validateMiddleware, controllerWrapper(controller.addContact))

router.delete('/:contactId', controllerWrapper(controller.removeContact))

router.patch('/:contactId', validateMiddleware, controllerWrapper(controller.updateContact))

module.exports = router
