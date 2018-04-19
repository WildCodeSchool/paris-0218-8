const express = require('express')
const fs = require('fs')
const util = require('util')
const path = require('path')
const nodemailer = require('nodemailer')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')



const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const readdir = util.promisify(fs.readdir)


const user1 = require('./mock/users/user1.json')
const user2 = require('./mock/users/user2.json')
const user3 = require('./mock/users/user3.json')
const user4 = require('./mock/users/user4.json')
const user5 = require('./mock/users/user5.json')

const users = [
  user1,
  user2,
  user3,
  user4,
  user5,
]

const app = express()

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use((request, response, next) => {
  if (request.method === 'GET') return next()

  //console.log('posay oklm dans le middleware sisi tkt tu peux pas test ma gueule')

  let accumulator = ''

  request.on('data', data => {
    accumulator += data
  })

  request.on('end', () => {
    //console.log('parsing terminé')
    try {
      request.body = JSON.parse(accumulator)
      next()
    } catch (err) {
      next(err)
    }
  })

})

app.get('/', (request, response) => {
  response.send('OK')
})


//parti val concernant formulaire inscription
app.post('/formulaire', (request, response, next) => {
  const id = Math.random().toString(36).slice(2).padEnd(11, '0')

  const filename = `user${id}.json`
  const filepath = path.join(__dirname, './mock/users/', filename)



  const content = {
    FirstName: request.body.Firstname,
    LastName: request.body.Lastname,
    Username: request.body.Username,
    Password: request.body.Password,
    Confirmpass: request.body.Confirmpass,
    Email: request.body.Email,
    Phone: request.body.Phone,
    Message: request.body.Message
  }

  writeFile(filepath, JSON.stringify(content), 'utf8')
    .then(() => response.json('OK'))
    .catch(next)
})




//parti smain sur les events
app.post('/newevent', (request, response, next) => {

  const id = Math.random().toString(36).slice(2).padEnd(11, '0')
  const filename = `user${id}.json`
  const filepath = path.join(__dirname, './mock/users/', filename)

  const content = {
    id: id,
    eventTitle: request.body.eventName,
    eventDetails: request.body.eventDescription,
    eventType: request.body.eventType,
    eventAddress: request.body.eventAddress,
    eventDate: request.body.eventDate,
    eventPeople: request.body.eventPeople
  }

  writeFile(filepath, JSON.stringify(content), 'utf8')
    .then(() => response.json('OK'))
    .catch(next)
})

app.get('/users', (request, response) => {
  const usersDir = path.join(__dirname, './mock/users/')
  readdir(usersDir)
    .then(files => {
      const filepaths = files.map(file => path.join(usersDir, file))

      const allFiles = filepaths.map(filepath => {
        return readFile(filepath, 'utf8')
      })

      Promise.all(allFiles)
        .then(allFilesValues => {
          //console.log(allFilesValues)
          const valuesInJson = allFilesValues.map(JSON.parse)
          //console.log(valuesInJson)
          response.json(valuesInJson)
        })
        .catch(err => {
          response.status(500).end(err.message)
        })

    })
  response.json(users)

})

app.get('/users/:id', (request, response) => {
  const filename = `user${request.params.id}.json`
  const filepath = path.join(__dirname, './mock/users/', filename)
  //console.log({ filename, filepath })

  const currentReadfile = readFile(filepath)
  currentReadfile.then(data => {
    response.header('Content-type', 'application/json; charset=utf-8')
    response.end(data)
  })
  currentReadfile.catch(err => {
    response.status(404).end('user not found')
  })

})

app.listen(8080, () => console.log('Listening to 8080 port'))
