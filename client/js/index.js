/* global fetch */

import { displayUsers } from './component/user.js'

console.log('usersList connected')

fetch('http://localhost:8080/users')
  .then(response => response.json())
  .then(users => {
    const usersElement = document.getElementById('profiles')
    const userElements = users.map(displayUsers).join('')

    usersElement.innerHTML = userElements
  })
