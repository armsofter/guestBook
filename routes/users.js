const express = require('express')
const router = express.Router()
const Controller = require('../controllers/users')
const Users = new Controller()
let jwtCheck = require('../controllers/jwt');
jwtCheck = new jwtCheck();

router.post('/register', async (req, res) => {
  try {
    res.json(await Users.createUser(req.body))
  } catch (e) {
    res.json(e)
  }
})

router.post('/login', async (req, res) => {
  res.json(await Users.login(req.body));
})

router.get('/currentUser', jwtCheck.decode, async (req, res) => {
  res.json(req.user)
})

router.get('/list', jwtCheck.decode, async (req, res) => {
  res.json(await Users.getAllUsers())
})


module.exports = router
