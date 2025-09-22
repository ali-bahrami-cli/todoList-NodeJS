const {Router} = require('express')
const router = new Router()
const {addTodo,delTodo,upTodo,delAll} = require('../controllers/admin')


router.post('/add-todo',addTodo)

router.get('/delete-todo/:id',delTodo)

router.get('/complete-todo/:id',upTodo)

router.get('/delete-all',delAll)

module.exports = router