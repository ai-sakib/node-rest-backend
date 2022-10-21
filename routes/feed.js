const express = require('express')

const feedController = require('../controllers/feed')
const isAuth = require('../middlewares/is-auth')

const router = express.Router()

const { postDataValidation } = require('../validations/feed')

// GET /feed/posts
router.get('/posts', isAuth, feedController.getPosts)
router.post('/posts', isAuth, postDataValidation, feedController.createPost)
router.get('/posts/:postId', isAuth, feedController.getSinglePost)
router.put(
    '/posts/:postId',
    isAuth,
    postDataValidation,
    feedController.updatePost
)
router.delete('/posts/:postId', isAuth, feedController.deletePost)

module.exports = router
