const express = require('express')
const router = express.Router()
const { auth, validation, controllerWrapper } = require('../../middlewares')
const { joiSchema, statusJoiSchema } = require('../../models/contacts')
const { contacts: controller } = require('../../controllers')

router.get('/', auth, controllerWrapper(controller.listContacts))

router.get('/:contactId', auth, controllerWrapper(controller.getContactById))

router.post('/', auth, validation(joiSchema), controllerWrapper(controller.addContact))

router.delete('/:contactId', auth, controllerWrapper(controller.removeContact))

router.put('/:contactId', auth, validation(joiSchema), controllerWrapper(controller.updateContact))

router.patch('/:contactId/favorite', auth, validation(statusJoiSchema), controllerWrapper(controller.updateStatusContact))

module.exports = router
