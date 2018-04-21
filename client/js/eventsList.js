import { displayEvents } from './component/events.js'

console.log('eventsList connected')

fetch('http://localhost:8080/eventsList')
  .then(response => response.json())
  .then(events => {
  	const eventsElement = document.getElementById('events')
    const eventElements = events.map(displayEvents).join('')

    eventsElement.innerHTML = eventElements
  })