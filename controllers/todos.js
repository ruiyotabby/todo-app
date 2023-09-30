const todosRouter = require('express').Router()
const Todo = require('../models/todo')

todosRouter.get('/', (request, response) => {
  Todo.find({}).then(result => response.json(result)).catch(error => response.status(400).send(error.message))
})

module.exports = todosRouter