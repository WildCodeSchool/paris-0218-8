export const displayUsers = user => `
  <div class="users">
    <a class='user' href='/user.html?id=${user.id}'> 
      <div class="adepte"></div>
        <a href="/profil.html?id=${user.id}" >
          <h2 class="name">${user.username}</h2>
          <img src=${user.photo} class="adepte">
        </a>
      </div>
    </a>
  </div> 
`

export const displayUser = user => `
  <div class="users">
    <a class='user' href='/user.html?id=${user.id}'> 
      <div class="adepte"></div>
        <a href="/profil.html?id=${user.id}" >
          <h2 class="name">${user.username}</h2>
          <img src=${user.photo} class="adepte">
          <p>${user.mail}</p>
        </a>
      </div>
    </a>
  </div> 
`
