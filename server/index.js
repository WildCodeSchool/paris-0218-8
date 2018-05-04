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
  response.header('Access-Control-Allow-Credentials', 'true') // important
  response.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE') // important
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

//important pour l'affichage des data des users
app.use((request, response, next) => {
  if (request.method !== 'POST' && request.method !== 'PUT') return next()
  let accumulator = ''

  request.on('data', data => {
    accumulator += data
  })

  request.on('end', () => {
    try {
      request.body = accumulator ? JSON.parse(accumulator) : {}
      next()
    } catch (err) {
      next(err)
    }
  })
})


// Setup session handler
app.use(session({
  secret,
  saveUninitialized: true,
  resave: true,
  store: new FileStore({ secret })
}))

// const filename = `user-${id}.json`
// const filepath = path.join(__dirname, './mock/users/', filename)

// Users (hard coded here but consider it comes from database)

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, { user: req.session.user, cookie: req.headers.cookie })
  next()
})

// ROUTES

app.get('/', (req, res) => {
  const user = req.session.user || {}

  res.json(user)
})

app.post('/sign-in', (req, res, next) => {
  console.log("sign-in start in")

  const users = [
  { login: 'bertrand@gmail.com', password: 'azerty123' },
  { login: 'martine@gmail.com', password: 'rosedamour' }
  ]
  // does user exists ?
  const user = users.find(u => req.body.login === u.login)

  // Error handling
  if (!user) {
    return next(Error('User not found'))
  }

  if (user.password !== req.body.password) {
    return next(Error('Wrong password'))
  }

  // else, set the user into the session
  req.session.user = user

  res.json(user)
})

app.get('/sign-out', (req, res, next) => {
  req.session.user = {}

  res.json('ok')
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
  console.log('request.body : ', request.body)
  const event = request.body
  event.id = id
  console.log(event)
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


// ERROR HANDLING MIDDLEWARE

app.use((err, req, res, next) => {
  if (err) {
    res.json({ message: err.message })
    console.error(err)
    return
  }

  next(err)
})


app.listen(8080, () => console.log('Listening to 8080 port'))
