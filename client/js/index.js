const newUser = () => 
	<div class="user"> 
  		<h2> {name} </h2>
  		<p> {profil} </p>
  		<p> Mail : bobby@gmail.com </p>
  	</div>

fetch ("http://localhost:8080/users")
  .then(response => response.json())
  .then(users => {
  	const usersElement = document.getElementById('users')
  	usersElement.innerHTML = JSON.stringify(users)
  })