const express = require('express')

const app = express()

app.get('/', (request, response) => {
	response.send('OK')
})

app.listen(8080, () => console.log('Listening to 8080 port'))