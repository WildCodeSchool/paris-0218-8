/* global fetch, URLSearchParams */

import { createUserDetailElement } from './component/user.js'
import { createNavbarElement } from './component/nav.js'
import { createHeadElement } from './component/head.js'
document.getElementById('head').innerHTML = createHeadElement()
document.getElementById('navDyn').innerHTML = createNavbarElement()

const userElement = document.getElementById('user')
const params = new URLSearchParams(window.location.search)
const id = params.get('id')

fetch(`http://localhost:8080/users/${id}`)
  .then(response => response.json())
  .then(user => {
    userElement.innerHTML = createUserDetailElement(user)
  })
