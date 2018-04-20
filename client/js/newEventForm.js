/* global fetch */

const form = document.getElementById('add-new-event')

form.addEventListener('submit', e => {
  e.preventDefault()

  const event = {
    title: document.getElementById('add-event-title').value,
    description: document.getElementById('add-event-description').value,
    type: document.getElementById('add-event-type').value,
    address: document.getElementById('add-event-address').value,
    date: document.getElementById('add-event-date').value,
    people: document.getElementById('add-people-number').value
  }

  fetch('http://localhost:8080/newEvent', {
    method: 'post',
    body: JSON.stringify(event)
  }).then(res => console.log(res.status))
})
