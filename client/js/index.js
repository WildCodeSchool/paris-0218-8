/* global fetch */
import { createUserElement } from './component/user.js'
import { createNavbarElement } from './component/nav.js'
const authElement = document.getElementById('auth')
const messageElement = document.getElementById('message')

document.getElementById('navDyn').innerHTML = createNavbarElement()

fetch('http://localhost:8080/users')
  .then(response => response.json())
  .then(users => {
    const usersElement = document.getElementById('profiles')
    const userElements = users.slice(-5).map(createUserElement).join('')

    usersElement.innerHTML = userElements
  })


const handleAuth = res => {
  const login = res.login

  authElement.innerHTML = login ? `Hi ${login}` : 'Not connected, please login'

  signInForm.style.display = login ? 'none' : 'block'
  signOutForm.style.display = login ? 'block' : 'none'

  // handle errors
  messageElement.innerHTML = res.error || ''
}

fetch('http://localhost:8080/', { 'credentials': 'include' })
  .then(res => res.json())
  // .then(handleAuth)
