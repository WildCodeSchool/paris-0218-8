import { displayUser } from './component/user.js'


const params = new URLSearchParams(window.location.search)
const id = params.get('id')
// console.log('id: ', id)
fetch(`http://localhost:8080/users/${id}`)
	.then(response => response.json())
	.then(user => {
	  	const userElement = document.getElementById('user')
	  	userElement.innerHTML = displayUser(user)
	})