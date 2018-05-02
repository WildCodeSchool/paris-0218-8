export const createEventElement = event => `
  <div class="events">
    <div class="evenement"></div>
      <a href="scheduledEvent.html?id=${event.id}" >
        <!-- test -->
        <div class = "visit-img col-sm-6" id ="visit-second"><h3><br /><br />${event.title} le ${event.date} avec ${event.people} participants</h3></div>
        <row>
        <!-- test -->
      </a>
    </div>
  </div> 
`

// export const createEventDetailElement = event => `
//   <div class="event">
//     <div class="OneEvent"></div>
//       <h2 class="title">${event.title}</h2>
//       <h2 class="desc">${event.description}</h2>
//       <h2 class="type">${event.type}</h2>
//       <h2 class="date">${event.date}</h2>
//       <h2 class="people">${event.people} participants</h2>
//     </div>
//   </div> 
// `
