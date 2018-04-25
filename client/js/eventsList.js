/* global fetch */
import { createEventElement } from './component/event.js'
import { createNavbarElement } from './component/nav.js'

document.getElementById('navDyn').innerHTML = createNavbarElement()

const form = document.getElementById('add-new-event')

fetch('http://localhost:8080/eventsList')
  .then(response => response.json())
  .then(events => {
    const eventsElement = document.getElementById('events')
    const eventElements = events.map(createEventElement).join('')

    eventsElement.innerHTML = eventElements
  })
