const express = require('express')
const router = express.Router()
const { validation, controllerWrapper } = require('../../middlewares')
const { contactsSchema } = require('../../schemas')
const { contacts: controller } = require('../../controllers')

router.get('/', controllerWrapper(controller.listContacts))

router.get('/:contactId', controllerWrapper(controller.getContactById))

router.post('/', validation(contactsSchema), controllerWrapper(controller.addContact))

router.delete('/:contactId', controllerWrapper(controller.removeContact))

router.put('/:contactId', validation(contactsSchema), controllerWrapper(controller.updateContact))

module.exports = router
