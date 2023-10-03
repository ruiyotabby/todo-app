const todosRouter = require('express').Router();
const Todo = require('../models/todo');

todosRouter.get('/', (request, response, next) => {
  Todo.find({})
    .then((todos) => response.json(todos))
    .catch((error) => next(error));
});

todosRouter.post('/', (request, response, next) => {
  const { title, important, items } = request.body;

  const todo = new Todo({
    title,
    important,
    items,
  });

  todo.save()
    .then((savedTodo) => response.status(201).json(savedTodo))
    .catch((error) => next(error));
});

module.exports = todosRouter;
