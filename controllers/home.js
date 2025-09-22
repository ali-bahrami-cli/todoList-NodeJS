const Todo = require('../model/todo')

exports.readTodo = (req,res)=>{
    Todo.read((todos)=>{
        res.render('todo',
        {
            todos
        })
    })
}