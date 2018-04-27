/* global fetch */
const authElement = document.getElementById('auth')
const messageElement = document.getElementById('message')
const signInForm = document.getElementById('sign-in-form')
const signOutForm = document.getElementById('sign-out-form')

import { createUserElement } from './component/user.js'
import { createNavbarElement } from './component/nav.js'

document.getElementById('navDyn').innerHTML = createNavbarElement()

console.log('connected')
fetch('http://localhost:8080/users')
  .then(response => response.json())
  .then(users => {
    const usersElement = document.getElementById('profiles')
    const userElements = users.map(createUserElement).join('')

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

signInForm.addEventListener('submit', e => {
  e.preventDefault()

  const formData = new FormData(e.target)

  const credentials = {
    login: formData.get('login'),
    password: formData.get('password')
  }

  fetch('http://localhost:8080/sign-in', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    'credentials': 'include', // Always send user credentials (cookies, basic http auth, etc..), even for cross-origin calls.
    body: JSON.stringify(credentials)
  })
  .then(res => res.json())
  .then(handleAuth)
})

signOutForm.addEventListener('submit', e => {
  e.preventDefault()

  fetch('http://localhost:8080/sign-out', { 'credentials': 'include' })
    .then(res => res.json())
    .then(handleAuth)
})


fetch('http://localhost:8080/', { 'credentials': 'include' })
  .then(res => res.json())
.then(handleAuth)




// effet fade in sur le bloc Concept
/*
(window).on('load', function () {
  (window).scroll(function () {
    ('.fade').each(function () {
      // Check the location of each desired element
      var objectBottom = $(this).offset().top + $(this).outerHeight()
      var windowBottom = $(window).scrollTop() + $(window).innerHeight()

      // If the element is completely within bounds of the window, fade it in
      if (objectBottom < windowBottom) { // object comes into view (scrolling down)
        if ($(this).css('opacity') == 0) { $(this).fadeTo(500, 1) }
      } else { // object goes out of view (scrolling up)
        if ($(this).css('opacity') == 1) { $(this).fadeTo(500, 0) }
      }
    })
  }); $(window).scroll() // invoke scroll-handler on page-load
})
*/
