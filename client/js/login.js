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
    photoProfil: document.getElementById('photo').value
  }

  fetch('http://localhost:8080/signup', {
    method: 'post',
    body: JSON.stringify(userInfos)
  })
})

const signInForm = document.getElementById('sign-in-form')

signInForm.addEventListener('submit', e => {
  e.preventDefault()

  const credentials = {
    login: document.getElementById('signin-mail').value,
    password: document.getElementById('signin-password').value
  }

  console.log(credentials)

  fetch('http://localhost:8080/sign-in', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    'credentials': 'include', // Always send user credentials (cookies, basic http auth, etc..), even for cross-origin calls.
    body: JSON.stringify(credentials)
  })
    .then(res => console.log(res.json()))

})

// const signOutForm = document.getElementById('sign-out-form')


// signOutForm.addEventListener('submit', e => {
//   e.preventDefault()

//   fetch('http://localhost:8080/sign-out', { 'credentials': 'include' })
//     .then(res => res.json())
//     .then(handleAuth)
// })
