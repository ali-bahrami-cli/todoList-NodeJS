const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('todo_db','root',process.env.MYSQL_PASS,{
    dialect: 'mysql',
    host: 'localhost',
})

module.exports = sequelize