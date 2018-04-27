export const createNavbarElement = () =>
  /*`
  <nav>
    <ul class="nav_ul">
      <li class="nav_li"><a href="http://localhost:5000/"><img src="../../img/Logo_Game_Society.jpg" height="90" alt="Logo_Game_Society"></a></li>
      <li class="nav_li"><a class="active" href="#game">Les jeux</a></li>
      <li class="nav_li"><a href="map.html">La communauté</a></li>
      <li class="nav_li"><a href="eventsList.html">Dernières parties</a></li>
      <li class="nav_li"><a href="newEvent.html">Créer un évènement</a></li>
      <li class="nav_li"><a href="login.html"><span id="login">Inscription/Connexion</span></a></li>
    </ul>
  </nav>
`
*/
  `<nav class="navbar navbar-expand-lg navbar-light" >
  <a class="navbar-brand" href="http://localhost:5000/"><img src="../../img/Logo_Game_Society.jpg" height="90" alt="Logo_Game_Society"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item active">
        <a class="nav-link colorstyle" href="map.html">La communauté <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item active">
        <a class="nav-link colorstyle" href="eventsList.html">Dernière parties <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item active">
        <a class="nav-link colorstyle" href="newEvent.html">Créer un évènement <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item active">
        <button><a class="nav-link colorstyle" href="login.html">Inscription/Connexion <span class="sr-only">(current)</span></a></button>
      </li>
    </ul>
    </div>
</nav>`
