const express = require('express')
const router = express.Router()
const { validation, controllerWrapper } = require('../../middlewares')
const { joiSchema, statusJoiSchema } = require('../../models/contacts')
const { contacts: controller } = require('../../controllers')

router.get('/', controllerWrapper(controller.listContacts))

router.get('/:contactId', controllerWrapper(controller.getContactById))

router.post('/', validation(joiSchema), controllerWrapper(controller.addContact))

router.delete('/:contactId', controllerWrapper(controller.removeContact))

router.put('/:contactId', validation(joiSchema), controllerWrapper(controller.updateContact))

router.patch('/:contactId/favorite', validation(statusJoiSchema), controllerWrapper(controller.updateStatusContact))

module.exports = router
