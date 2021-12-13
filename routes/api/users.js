const express = require('express')
const { auth, controllerWrapper } = require('../../middlewares')
const { users: controller } = require('../../controllers')

const router = express.Router()

router.get('/', auth, controllerWrapper(controller.getCurrent))
router.patch('/subscription', auth, controllerWrapper(controller.subscriptionUpdate))

module.exports = router
