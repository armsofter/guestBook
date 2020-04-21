var express = require('express')
var bodyParser = require('body-parser')

const Users = require('./routes/users')
const Posts = require('./routes/posts')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/users', Users)
app.use('/posts', Posts)

app.use(function (req, res, next) {
  res.status(404);
  res.json({error: 'not found'})
})

module.exports = app
