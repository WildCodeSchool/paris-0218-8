const express = require('express')
const fs = require('fs')
const util = require('util')
const path = require('path')
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const readdir = util.promisify(fs.readdir)

const app = express()

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use((request, response, next) => {
  if (request.method === 'GET') return next()
  let accumulator = ''
  request.on('data', data => {
    accumulator += data
  })
  request.on('end', () => {
    try {
      request.body = JSON.parse(accumulator)
      next()
    } catch (err) {
      next(err)
    }
  })
})

app.use((request, response, next) => {
  console.log(request.url)
  next()
})

app.get('/', (request, response) => {
  response.send('OK')
})

app.post('/signup', (request, response, next) => {
  const id = Math.random().toString(36).slice(2).padEnd(11, '0')
  const filename = `user-${id}.json`
  const filepath = path.join(__dirname, './mock/users/', filename)

  const body = request.body
  const n = Math.floor(Math.random() * 100)
  const user = {
    id: id,
    firstName: body.firstname,
    lastName: body.lastname,
    username: body.username,
    password: body.password,
    email: body.email,
    phone: body.phone,
    message: body.message,
    photo: `https://randomuser.me/api/portraits/${n & 1 ? 'wo' : ''}men/${n}.jpg`
  }

  writeFile(filepath, JSON.stringify(user, null, 2), 'utf8')
    .then(() => response.json('OK'))
    .catch(next)
})

app.post('/newevent', (request, response, next) => {
  const id = Math.random().toString(36).slice(2).padEnd(11, '0')
  const filename = `event-${id}.json`
  const filepath = path.join(__dirname, './mock/events/', filename)

  const event = request.body
  event.id = id

  writeFile(filepath, JSON.stringify(event, null, 2), 'utf8')
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
          const users = allFilesValues.map(JSON.parse)

          response.json(users)
        })
        .catch(err => {
          response.status(500).end(err.message)
        })
    })
})

app.get('/users/:id', (request, response) => {
  const filename = `user-${request.params.id}.json`
  const filepath = path.join(__dirname, './mock/users/', filename)

  readFile(filepath)
    .then(data => {
      response.header('Content-type', 'application/json; charset=utf-8')
      response.end(data)
    })
    .catch(() => {
      response.status(404).end('user not found')
    })
})

app.get('/eventsList', (request, response) => {
  const eventsDir = path.join(__dirname, './mock/events/')
  readdir(eventsDir)
    .then(files => {
      const filepaths = files.map(file => path.join(eventsDir, file))

      const allFiles = filepaths.map(filepath => {
        return readFile(filepath, 'utf8')
      })

      Promise.all(allFiles)
        .then(allFilesValues => {
          const events = allFilesValues.map(JSON.parse)

          response.json(events)
        })
        .catch(err => {
          response.status(500).end(err.message)
        })
    })
})

app.get('/eventsList/:id', (request, response) => {
  const filename = `event-${request.params.id}.json`
  const filepath = path.join(__dirname, './mock/events/', filename)

  readFile(filepath)
    .then(data => {
      response.header('Content-type', 'application/json; charset=utf-8')
      response.end(data)
    })
    .catch(() => {
      response.status(404).end('event not found')
    })
})

app.listen(8080, () => console.log('Listening to 8080 port'))
