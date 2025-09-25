const Todo = require('../model/todo')
const {v4: uuidv4} = require('uuid')

exports.addTodo = (req,res)=>{
    if (!req.body.task) return res.redirect('/')
    const todo = new Todo(uuidv4(),req.body.task)
    todo.create(err=>{
        if (!err) return res.redirect('/')
        console.log(err) 
    })
}

exports.delTodo = (req,res)=>{
    Todo.delete(req.params.id,err=>{
        if (!err) return res.redirect('/')
        console.log(err)
    })
}

exports.upTodo = (req,res)=>{
    Todo.update(req.params.id,err=>{
        if (!err) return res.redirect('/')
        console.log(err)
    })
}

exports.delAll = (req,res)=>{
    Todo.delAll(err=>{
        if (!err) return res.redirect('/')
        console.log(err);
    })
}