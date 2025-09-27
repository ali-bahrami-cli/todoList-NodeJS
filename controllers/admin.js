const Todo = require('../model/todo')

exports.addTodo = (req,res)=>{
    if (!req.body.task) return res.redirect('/')
    Todo.create({text: req.body.task})
    .then(result =>{
        console.log(result);
        res.redirect('/')
    }).catch(err => {
        console.log(err);
    })
}

exports.delTodo = (req,res)=>{
    Todo.destroy({where: {id : req.params.id}})
    .then(result => {
        console.log(result)
        res.redirect('/')
    }).catch(err => {
        console.log(err)
    })
}

exports.upTodo = (req,res)=>{
    Todo.findByPk(req.params.id)
    .then(todo => {
        todo.completed ? todo.completed = false : todo.completed = true;
        return todo.save()
    }).then(() => res.redirect('/'))
    .catch(err =>{
        console.log(err);
    })
}

exports.delAll = (req,res)=>{
    Todo.truncate()
    .then(()=>{
        console.log('full cleaned')
        res.redirect('/')
    }).catch(err => console.log(err))
}
