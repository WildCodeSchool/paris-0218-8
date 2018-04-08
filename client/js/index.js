fetch ('http://localhost:8080/users')
  .then(response => response.json())
  .then(users => {
  	const usersElement = document.getElementById('users')
  	usersElement.innerHTML = JSON.stringify(users)
  })