/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Todo = require('../models/todo');

const api = supertest(app);

beforeAll(async () => {
  await Todo.deleteMany({});
});

test('todo are returned as json', async () => {
  await api
    .get('/api/todos')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('a valid todo can be saved', async () => {
  const before = await api.get('/api/todos');

  const newTodo = {
    title: 'Programming',
    important: true,
    items: [
      {
        content: 'State management',
        completed: false,
      },
    ],
  };

  await api
    .post('/api/todos')
    .send(newTodo)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const after = await api.get('/api/todos');

  expect(after.body).toHaveLength(before.body.length + 1);
});

test('an invalid todo cannot be saved', async () => {
  const before = await api.get('/api/todos');

  const newTodo = {
    important: true,
    items: [
      {
        content: 'State management',
        completed: false,
      },
    ],
  };

  await api
    .post('/api/todos')
    .send(newTodo)
    .expect(400);

  const after = await api.get('/api/todos');

  expect(after.body).toHaveLength(before.body.length);
});

afterAll(() => mongoose.connection.close());
