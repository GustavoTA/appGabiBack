const express = require('express')
const perguntaRoute = require('./routes/perguntaRoute')
const http = require('http')
const mongoose = require('mongoose')
const app = express()


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

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)
    // Pass to next layer of middleware
    next()
})


app.use('/perguntas', perguntaRoute)

//port
const server = http.createServer(app)
server.listen(process.env.PORT || 3000)

module.exports = app