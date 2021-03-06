const express = require('express')
const perguntaRoute = require('./routes/perguntaRoute')
const userRoute = require('./routes/userRoute')
const http = require('http')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')


//Configurações Base de Dados
const passwordMongo = 'YcjjwneOk10eYQku'
const urlMongo = 'mongodb+srv://micro:'+ passwordMongo +'@microservicos-cnyxh.mongodb.net/AppGabi?retryWrites=true&w=majority'
const options = { poolSize: 5, useUnifiedTopology: true, useNewUrlParser: true}

// start mongo
mongoose.connect(urlMongo, options)
mongoose.set('useCreateIndex', true)

// express use
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.use('/perguntas', perguntaRoute)

app.use('/user', userRoute)

//port
const server = http.createServer(app)
server.listen(process.env.PORT || 3000)

module.exports = app