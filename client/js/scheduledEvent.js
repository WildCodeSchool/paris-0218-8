/* global fetch, URLSearchParams */

import { createEventDetailElement } from './component/event.js'

const eventElement = document.getElementById('specificEvent')
const params = new URLSearchParams(window.location.search)
const id = params.get('id')

fetch(`http://localhost:8080/eventsList/${id}`)
  .then(response => response.json())
  .then(event => {
    eventElement.innerHTML = createEventDetailElement(event)
  })
