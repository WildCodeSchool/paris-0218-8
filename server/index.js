const express = require('express')
const user1 = require('../mock/users/user1.json')
const user2 = require('../mock/users/user2.json')
const user3 = require('../mock/users/user3.json')
const user4 = require('../mock/users/user4.json')
const user5 = require('../mock/users/user5.json')

const users = [
	user1,
	user2,
	user3,
	user4,
	user5,
	]

//console.log(users)
const app = express()

app.get('/', (request, response) => {
	response.send('OK')
})

app.get('/users', (request, response) => {
	response.json(users)
})


app.listen(8080, () => console.log('Listening to 8080 port'))