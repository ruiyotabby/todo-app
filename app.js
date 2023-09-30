const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const todosRouter = require('./controllers/todos')

const URL = process.env.MONGODB_URI

mongoose.set('strictQuery', false)
mongoose.connect(URL)
  .then(() => console.log('Connected to Mongodb'))
  .catch(error => console.error('error connecting to Mngodb: ',error.message))

app.use(cors())
app.use('/api/todos', todosRouter)

module.exports = app