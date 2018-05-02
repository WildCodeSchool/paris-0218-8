export const createUserElement = user => 

` <div class= "row d-flex justify-content-between ml-5" >
    <div class="col-2">
    <a href="profil.html?id=${user.id}" >
      <h2 class="name mt-5">${user.username}</h2>
      <img class="rounded-circle" src=${user.photo} style="width:150px; height:150px;">
      </a>
    </div>
  <div> `

export const createUserDetailElement = user => `
    <div class = "row">
      <div class = "col-12 backgroundColor">
      </div>
    </div>
  <div class="profileElements">
    <div class="row">
      <div class="col-7 offset-5">
        <figure class="figure">
          <img src=${user.photo} class="figure-img img-fluid rounded-circle profilePic" alt="A generic square placeholder image with rounded corners in a figure.">
          <figcaption class="figure-caption profileName text-center">${user.username}</figcaption>
        </figure>
      </div>
    </div>
    <div class="row">
      <div class="col-3 offset-6">
        <p class="profileDetail"> <strong>Mail :</strong> <br> ${user.email}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-3 offset-6">
        <p class="profileDetail"> <strong>Téléphone :</strong> <br> ${user.phone}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-3 offset-6">
        <p class="profileDetail"> <strong>Description :</strong> <br> ${user.message}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-3 offset-6">
        <button type="button" class="btn btn-primary sendButton">Contacter</button>
      </div>
    </div>
  </div>
  `