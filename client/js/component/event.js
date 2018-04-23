export const createEventElement = event => `
  <div class="events">
    <div class="evenement"></div>
      <a href="/html/scheduledEvent.html?id=${event.id}" >
        <h2 class="title">${event.title}</h2>
      </a>
    </div>
  </div> 
`

export const createEventDetailElement = event => `
  <div class="event">
    <div class="OneEvent"></div>
      <h2 class="title">${event.title}</h2>
      <h2 class="desc">${event.description}</h2>
      <h2 class="type">${event.type}</h2>
      <h2 class="date">${event.date}</h2>
      <h2 class="people">${event.people}</h2>
    </div>
  </div> 
`
