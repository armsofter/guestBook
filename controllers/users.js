const Models = require('../models/index')
const UsersModel = Models.user
const jwtSecret = require(__dirname + '/../config/config.json')['jwtSecret']
const jwt = require('jsonwebtoken')
const sha = require('sha256'); // very simple crypto for password

class Users {
  async createUser (user) {
    return  UsersModel.create({username: user.username, password: sha(user.password)})

  }

  async login (obj) {
    const user = await UsersModel.findOne({
      where: {
        username: obj.username,
        password: sha(obj.password)
      }
    })
    if (user) {
      const token = jwt.sign({userId: user.id}, jwtSecret)
      return {userid: user.id, token}
    }
    return null
  }

  async getAllUsers () {
    return UsersModel.findAll({attributes: ['username', 'id']})
  }

}

module.exports = Users