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
      <div class = "col-lg-12 backgroundColor"></div>
    </div>
  <div class="profileElements">
    <div class="row">
      <div class="col-lg-6 offset-lg-5 col-6 offset-3">
        <figure class="figure">
          <img src=${user.photo} class=" profileDetail figure-img img-fluid rounded-circle img-responsive profilePic" alt="A generic square placeholder image with rounded corners in a figure.">
          <figcaption class=" profileDetail figure-caption profileName text-center">${user.username}</figcaption>
        </figure>
      </div>
    </div>
    <div class="profileDetail">
    <div class="row">
      <div class="col-lg-6 offset-lg-5 col-12">
        <p> <strong>Mail :</strong> <br> ${user.email}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 offset-lg-5 col-12">
        <p> <strong>Téléphone :</strong> <br> ${user.phone}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 offset-lg-5 col-12">
        <p> <strong>Description :</strong> <br> ${user.message}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 offset-lg-5 col-12">
        <button type="button" class="btn btn-primary sendButton">Contacter</button>
      </div>
    </div>
    </div>
  </div>
  `
