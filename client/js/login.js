/* global fetch */

import { createNavbarElement } from './component/nav.js'
import { createHeadElement } from './component/head.js'
import { createScriptElement } from './component/scriptbootstrap.js'

document.getElementById('scriptbootstrap').innerHTML = createScriptElement()
document.getElementById('head').innerHTML = createHeadElement()
document.getElementById('navDyn').innerHTML = createNavbarElement()

const form = window.document.getElementById('signup-form')

form.addEventListener('submit', e => {
  e.preventDefault()

  const userInfos = {
    firstName: document.getElementById('firstname').value,
    lastName: document.getElementById('lastname').value,
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
    confirmpass: document.getElementById('confirmpass').value,
    email: document.getElementById('mail').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
  }

  fetch('http://localhost:8080/signup', {
    method: 'post',
    body: JSON.stringify(userInfos)
  })
})
