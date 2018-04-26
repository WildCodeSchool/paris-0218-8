export const createUserElement = user =>

  ` <div class= "row d-flex justify-content-between ml-5" >
      <div class="col-2">
        <a href="profil.html?id=${user.id}">
          <h2 class="name mt-5">${user.username}</h2>
            <img class="rounded-circle" src=${user.photo} style="width:150px; height:150px;">
        </a>
      </div>
    <div>
`

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
