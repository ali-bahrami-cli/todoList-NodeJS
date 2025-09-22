const {Router} = require('express')
const router = new Router()
const path = require('path')
const rootDir = require('../utils/rootDir')
const {readTodo} = require('../controllers/home')


router.get('/',readTodo)

module.exports = router