require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todosRouter = require('./controllers/todos');
const middleware = require('./utils/middleware');

const app = express();

const URL = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI;

mongoose.set('strictQuery', false);
mongoose.connect(URL)
  .then(() => console.log('Connected to Mongodb'))
  .catch((error) => console.error('error connecting to Mongodb: ', error.message));

app.use(cors());
app.use('/api/todos', todosRouter);

app.use(middleware.uknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
