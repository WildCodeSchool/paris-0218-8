export const displayUsers = (user) => { 
	return  `
 <div class="users">
   <a class='user' href='/user.html?id=${user.id}'> 
 <div class="adepte"></div>
 	<a href="/profil.html?id=${user.id}" >
      <h2 class="name">${user.name}</h2>
      <img src=${user.photo} class="adepte">
    </a>
  </div>
  </div>
 </div> 
`
}



export const displayUser = (user) => { 
	return  `
 <div class="users">
   <a class='user' href='/user.html?id=${user.id}'> 
 <div class="adepte"></div>
 	<a href="/profil.html?id=${user.id}" >
      <h2 class="name">${user.name}</h2>
      <img src=${user.photo} class="adepte">
    <p>${user.profil}</p>
    <p>${user.mailaddress}</p>
    <p>${user.numberofplays}</p>
    </a>
  </div>
  </div>
 </div> 
`
}
	
