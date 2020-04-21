const jwt = require('jsonwebtoken')
const jwtSecret = require(__dirname + '/../config/config.json')['jwtSecret']
const Models = require('../models/index')
const UsersModel = Models.user

class jwtCheck {
  async decode (req, res, next) {
    try {
      const decoded = jwt.verify(req.headers.jwt, jwtSecret)
      const {id, username} = await UsersModel.findOne({
        where: {
          id: decoded.userId,
        }
      })
      req.user = {id, username}
      next()
    } catch (e) {
      res.json({error: 'error on auth'})
    }
  }
}

module.exports = jwtCheck