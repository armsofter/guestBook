'use strict'

module.exports = function (sequelize, DataTypes) {
  const Users = sequelize.define('user', {
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
  }, {
    timestamps: false,
  });
  return Users;
}