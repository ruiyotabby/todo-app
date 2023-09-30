const todosRouter = require('express').Router();
const Todo = require('../models/todo');

todosRouter.get('/', (request, response, next) => {
  Todo.find({})
    .then((result) => response.json(result))
    .catch((error) => next(error));
});

module.exports = todosRouter;
