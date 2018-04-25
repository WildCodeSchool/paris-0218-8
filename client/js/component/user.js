export const createUserElement = user => 
/*
`
  <div class="users">
    <div class="adepte"></div>
      <a href="profil.html?id=${user.id}" >
        <h2 class="name">${user.username}</h2>
        <img src=${user.photo} class="adepte">
      </a>
    </div>
  </div> 
`
*/
`<div class = "container ">
  <div class= "row d-inline-block" >
    <div class="col-2 ">
      <h2 class="name">${user.username}</h2>
      <img class="" src=${user.photo} style="width:120px;height:120px;">
    </div>
  <div> 
</div>`

export const createUserDetailElement = user => `
  <div class="users">
    <div class="adepte"></div>
      <h2 class="name">${user.username}</h2>
      <img src=${user.photo} class="adepte">
      <p>${user.email}</p>
      <p>${user.phone}</p>
      <p>${user.message}</p>


    </div>
  </div> 
`
