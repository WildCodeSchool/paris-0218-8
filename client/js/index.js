/* global fetch */

import { createUserElement } from './component/user.js'

console.log('connected')

fetch('http://localhost:8080/users')
  .then(response => response.json())
  .then(users => {
    const usersElement = document.getElementById('profiles')
    const userElements = users.map(createUserElement).join('')

    usersElement.innerHTML = userElements
  })

/* effet fade in sur le bloc Concept */

(window).on('load', function () {
  (window).scroll(function () {
    ('.fade').each(function () {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight()
      var windowBottom = $(window).scrollTop() + $(window).innerHeight()

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { // object comes into view (scrolling down)
        if ($(this).css('opacity') == 0) { $(this).fadeTo(500, 1) }
      } else { // object goes out of view (scrolling up)
        if ($(this).css('opacity') == 1) { $(this).fadeTo(500, 0) }
      }
    })
  }); $(window).scroll() // invoke scroll-handler on page-load
})
