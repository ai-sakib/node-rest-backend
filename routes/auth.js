const express = require('express')
const authController = require('../controllers/auth')
const router = express.Router()

const { credentialValidation } = require('../validations/auth')

// POST /auth/signup
router.put('/signup', credentialValidation, authController.signup)

router.post('/login', authController.login)

// router.get('/status', authController.getUserStatus)

// router.patch(
//     '/status',
//     [body('status').trim().not().isEmpty()],
//     authController.updateUserStatus
// )

module.exports = router
