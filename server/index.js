const express = require('express')
const fs = require('fs')
const util = require('util')
const path = require('path')
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const readdir = util.promisify(fs.readdir)

const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const secret = 'something unbelievable'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', request.headers.origin)
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  response.header('Access-Control-Allow-Credentials', 'true') // important
  next()
})

// Setup session handler
app.use(session({
  secret,
  saveUninitialized: false,
  resave: true,
  store: new FileStore({ secret })
}))

// const filename = `user-${id}.json`
// const filepath = path.join(__dirname, './mock/users/', filename)

// Users (hard coded here but consider it comes from database)
const users = [
  { login: 'bertrand', password: 'azerty123' },
  { login: 'martine', password: 'rosedamour' }
]

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, { user: req.session.user, cookie: req.headers.cookie })
  next()
})

app.get('/', (req, res) => {
  const user = req.session.user || {}

  res.json(user)
})

app.post('/sign-in', (req, res, next) => {
  // does user exists ?
  const user = users.find(u => req.body.login === u.login)

  // Error handling
  if (!user) {
    return res.json({ error: 'User not found' })
  }

  if (user.password !== req.body.password) {
    return res.json({ error: 'Wrong password' })
  }

  // else, set the user into the session
  req.session.user = user

  res.json(user)
})

app.get('/sign-out', (req, res, next) => {
  req.session.user = {}

  res.json('ok')
})

app.use((err, req, res, next) => {
  if (err) {
    res.json({ message: err.message })
    console.error(err)
  }

  next(err)
})

// app.use((request, response, next) => {
//   if (request.method === 'GET') return next()
//   let accumulator = ''
//   request.on('data', data => {
//     accumulator += data
//   })
//   request.on('end', () => {
//     try {
//       request.body = JSON.parse(accumulator)
//       next()
//     } catch (err) {
//       next(err)
//     }
//   })
// })

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
