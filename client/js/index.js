import { displayUser } from './component/user.js'

console.log('connected')

window.fetch('http://localhost:8080/users')
  .then(response => response.json())
  .then(users => {
    const usersElement = document.getElementById('profiles')
    const userElements = users.map(displayUser).join('')

    usersElement.innerHTML = userElements 

  })


  const profile = document.getElementById("")

