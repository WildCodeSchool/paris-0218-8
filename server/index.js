const express = require('express')
const fs = require('fs')
const util = require('util')
const path = require ('path')

const readFile = util.promisify(fs.readFile)
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
	user5,]

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
  const usersDir = path.join(__dirname, './mock/users/')
  readdir(usersDir)
  .then(files => {
    const filepaths = files.map(file => path.join(usersDir, file))

    const allFiles = filepaths.map( filepath =>{ 
      return readFile(filepath, 'utf8')
})

  Promise.all(allFiles)
  	.then(allFilesValues => {
  		console.log(allFilesValues)
  		const valuesInJson = allFilesValues.map(JSON.parse)
  		console.log(valuesInJson)
  		response.json(valuesInJson)
  	})
  	.catch(err =>{
  		response.status(500).end(err.message)
  	})

})
  response.json(users)

})





app.get('/users/:id', (request, response) => {
	const filename = `user${request.params.id}.json`
	const filepath = path.join(__dirname, './mock/users/', filename)
	console.log({ filename, filepath })
	
	const currentReadfile = readFile(filepath) 
		currentReadfile.then(data => {
		response.header ('Content-type', 'application/json; charset=utf-8')
		response.end(data)
	  })
		currentReadfile.catch(err => {
			response.status(404).end('user not found')
		})

	})

app.listen(8080, () => console.log('Listening to 8080 port'))
