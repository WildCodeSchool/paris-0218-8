const express = require('express')

const bodyParser = require('bodyParser')
const app = express()
const multer = require('multer')
const upload = multer()

const users = require('./usersArray.json')
console.log(users)

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})



//GET 
app.get('/forms-:id(\\d+)'), (req, res) => {
}


console.log('hello')