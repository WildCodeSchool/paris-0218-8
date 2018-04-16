const express = require('express')

const users = require('./usersArray.json')
console.log(users)

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
  
  response.json(user)

})

app.listen(8080, () => console.log('Listening to 8080 port'))
