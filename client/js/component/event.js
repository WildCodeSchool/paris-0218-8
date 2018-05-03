export const createEventElement = event => `
  <div class="events">
    <div class="evenement"></div>
        <!-- test -->
        <div class = "visit-img col-sm-6 col-6" id ="visit-second"><h3><br /><br />${event.title} le ${event.date} avec ${event.people} participants</h3></div>
        <row>
        <!-- test -->
      </a>
    </div>
  </div>
  `
// L4 <a href="scheduledEvent.html?id=${event.id}" >

// export const createEventDetailElement = event => `
//   <div class="event">
//     <div class="OneEvent"></div>
//       <h2 class="title">${event.title}</h2>
//       <h2 class="game">${event.game}</h2>
//       <h2 class="desc">${event.description}</h2>
//       <h2 class="address">${event.address}</h2>
//       <h2 class="date">${event.date}</h2>
//       <h2 class="people">${event.people} participants</h2>
//     </div>
//   </div>
// `
