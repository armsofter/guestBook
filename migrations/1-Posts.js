module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'posts',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        postText: {
          type: Sequelize.STRING
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'users',
              schema: 'public'
            },
            key: 'id'
          },
        },
      },
      {
        engine: 'MYISAM',                     // default: 'InnoDB'
        charset: 'latin1',                    // default: null
        schema: 'public'                      // default: public, PostgreSQL only.
      }
    )
  }
}