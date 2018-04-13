export const displayUser = (user) => { return  `
 <div class="container">
   <div class='user'> 
 <div class="adepte"></div>
 	<a href="/profil?user=${user.id}" >
      <h2 class="name">${user.name}</h2>
      <img src=${user.photo} class="adepte">
    </a>
  </div>
  </div>
 </div> 
`
}



/*  <p>${user.profil}</p>
    <p>${user.mailaddress}</p>
    <p>${user.numberofplays}</p>
*/