export const createNavbarElement = () =>

  `<nav class="navbar navbar-expand-lg navbar-light" >
  <a class="navbar-brand" href="http://localhost:5000/"><img src="../../img/Logo_Game_Society.jpg" height="90" alt="Logo_Game_Society"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item active">
        <a class="nav-link" href="map.html">La communauté <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item active">
        <a class="nav-link" href="eventsList.html">Dernières parties <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item active">
        <a class="nav-link" href="newEvent.html">Créez un évènement <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item active">
        <button><a class="nav-link button-collapse" href="login.html">Inscription/Connexion <span class="sr-only">(current)</span></a></button>
      </li>
    </ul>
    </div>
</nav>`
