/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

test('todo are returnd as json', async () => {
  await api
    .get('/api/todos')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

afterAll(() => mongoose.connection.close());
