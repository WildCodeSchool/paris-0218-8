import { displayUsers } from './component/user.js'

console.log('connected')

window.fetch('http://localhost:8080/users')
  .then(response => response.json())
  .then(users => {
    const usersElement = document.getElementById('profiles')
    const userElements = users.map(displayUsers).join('')
    usersElement.innerHTML = userElements 
})

  document.getElementById('add-new-event').addEventListener('submit', event => {
	event.preventDefault()
	const eventName = document.getElementById('add-event').value
	const eventDescription = document.getElementById('add-event-description').value
	const eventType = document.getElementById('add-event-type').value
	const eventAddress = document.getElementById('add-event-address').value
	const eventDate = document.getElementById('add-event-date').value
	const eventPeople = document.getElementById('add-people-number').value
	
  fetch('http://localhost:8080/newEvent', {
	method: 'post',
	body: JSON.stringify({
		eventName: eventName, 
		eventType: eventType,
		eventDescription: eventDescription,
		eventAddress: eventAddress, 
		eventDate: eventDate,
		eventPeople: eventPeople
	})
  }).then (res => console.log(res.status))

})