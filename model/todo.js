const {DataTypes} = require('sequelize')
const sequelize = require('../utils/db')

const Todo = sequelize.define('Todo',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    },
    text:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    completed:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
})

module.exports = Todo