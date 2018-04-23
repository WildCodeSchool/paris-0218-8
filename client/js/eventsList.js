/* global fetch */
import { createEventElement } from './component/event.js'

fetch('http://localhost:8080/eventsList')
  .then(response => response.json())
  .then(events => {
    const eventsElement = document.getElementById('events')
    const eventElements = events.map(createEventElement).join('')

    eventsElement.innerHTML = eventElements
  })
