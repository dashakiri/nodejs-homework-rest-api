const express = require('express')
const { auth, controllerWrapper } = require('../../middlewares')
const { auth: controller } = require('../../controllers')

const router = express.Router()

router.get('/users/current', auth, controllerWrapper(controller.getCurrent))

module.exports = router
