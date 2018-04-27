/* global fetch */

import { createNavbarElement } from './component/nav.js'

document.getElementById('navDyn').innerHTML = createNavbarElement()

const form = window.document.getElementById('signup-form')

form.addEventListener('submit', e => {
  e.preventDefault()

  const userInfos = {
    lastName: document.getElementById('lastname').value,
    firstName: document.getElementById('firstname').value,
    username: document.getElementById('username').value,
    email: document.getElementById('mail').value,
    confirmEmail: document.getElementById('confirmMail').value,
    password: document.getElementById('password').value,
    confirmpass: document.getElementById('confirmpass').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value,
    photoProfil: document.getElementById('exampleFormControlFile1').value
  }

  fetch('http://localhost:8080/signup', {
    method: 'post',
    body: JSON.stringify(userInfos)
  })
})
