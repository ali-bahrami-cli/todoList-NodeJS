const Todo = require('../model/todo')

exports.readTodo = (req,res)=>{
    Todo.findAll().then(todos=>{
        res.render('todo',{
            todos
        })
    })
}