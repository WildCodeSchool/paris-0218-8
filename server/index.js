const http = require('http')

const server = http.createServer((request, response) => {
	console.log("here's a request", request.url)
	response.end('OK')
})

server.listen(8080, () => console.log('Listening to 8080 port'))