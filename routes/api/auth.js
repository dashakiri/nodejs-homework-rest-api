const express = require('express')
const { auth, validation, controllerWrapper } = require('../../middlewares')
const { auth: controller } = require('../../controllers')
const { joiUserSchema } = require('../../models/user')

const router = express.Router()

router.post('/users/signup', validation(joiUserSchema), controllerWrapper(controller.register))
router.post('/users/login', validation(joiUserSchema), controllerWrapper(controller.login))
router.get('/users/logout', auth, controllerWrapper(controller.logout))

module.exports = router
