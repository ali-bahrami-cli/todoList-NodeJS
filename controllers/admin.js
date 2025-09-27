const Todo = require('../model/todo')

exports.addTodo = async (req,res)=>{
    if (!req.body.task) res.redirect('/')
    try {
        await Todo.create({text: req.body.task})
        res.redirect('/')    
    } catch (error) {
        console.log(error)
    }
}

exports.delTodo = async (req,res)=>{
    try {
        await Todo.destroy({where: {id : req.params.id}})
        res.redirect('/')    
    } catch (error) {
        console.log(error)
    }
}

exports.upTodo = async (req,res)=>{
    try {
        const todo = await Todo.findByPk(req.params.id)
        await todo.completed ? todo.completed = false : todo.completed = true;
        await todo.save()
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}

exports.delAll = async (req,res)=>{
    try {
        await Todo.truncate()
        res.redirect('/')    
    } catch (error) {
        console.log(error)
    }
}
