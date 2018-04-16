const express = require('express')

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
  user5
]

const app = express()

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', (request, response) => {
  response.send('OK')
})

app.get('/users', (request, response) => {
  response.json(users)
})

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id)

  const user = users.find(user => user.id === id)
  
  //console.log('fetching profile',id, user)
  response.json(user)

})

app.listen(8080, () => console.log('Listening to 8080 port'))
