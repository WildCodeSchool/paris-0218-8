export const displayEvents = event => `
  <div class="events">
    <a class='event' href='/user.html?id=${event.id}'> 
      <div class="evenement"></div>
        <a href="/eventsList.html?id=${event.id}" >
          <h2 class="title">${event.title}</h2>
        </a>
      </div>
    </a>
  </div> 
  `
