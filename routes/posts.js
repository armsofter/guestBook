const express = require('express')
const router = express.Router()
const Controller = require('../controllers/posts')
const Posts = new Controller()
let jwtCheck = require('../controllers/jwt')
jwtCheck = new jwtCheck()

router.post('/new', jwtCheck.decode, async (req, res) => {
  try {
    res.json(await Posts.createPost(req.body, req.user.id))
  } catch (e) {
    console.log(e)
    res.json({error: 'Error on create action'})
  }
})

router.post('/delete', jwtCheck.decode, async (req, res) => {
  try {
    res.json(await Posts.deletePost(req.body, req.user))
  } catch (e) {
    console.log(e)
    res.json({error: 'Error on delete action'})
  }
})

router.get('/count', jwtCheck.decode, async (req, res) => {
  try {
    res.json(await Posts.count())
  } catch (e) {
    console.log(e)
    res.json({error: 'Error on counting action'})
  }
})

router.get('/list/:page', jwtCheck.decode, async (req, res) => {
  try {
    if (Number(req.params.page) !== NaN) {
      res.json(await Posts.postPagination(Number(req.params.page)))
    } else {
      res.json({error: 'Error: page not provided'})
    }
  } catch (e) {
    console.log(e)
    res.json({error: 'Error on pagination action'})
  }
})

router.get('/list/', jwtCheck.decode, async (req, res) => {
  try {
    res.json(await Posts.postPagination(1))
  } catch (e) {
    console.log(e)
    res.json({error: 'Error on pagination action'})
  }
})

router.get('/userPosts', jwtCheck.decode, async (req, res) => {
  try {
    res.json(await Posts.getUserPosts(req.user.id))
  } catch (e) {
    console.log(e)
    res.json({error: 'Error on pagination action'})
  }
})

module.exports = router
