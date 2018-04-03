fetch ('http://localhost:8080/users')
	.then(response => response.json())
	.then(users => {
		console.log(users)
	})