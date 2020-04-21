'use strict';
const Users = require('./Users');

module.exports = function (sequelize, DataTypes) {
  const Posts = sequelize.define('post', {
    postText: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER
    },
  }, {

    timestamps: false,
  });
  Posts.belongsTo(Users(sequelize, DataTypes));
  return Posts;
}