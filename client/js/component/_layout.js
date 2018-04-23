export const createLayoutElement = (styles, scripts, content) => `
  <head>
    <meta charset="utf-8">
    <title>Game Society</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${styles.map(style => `<link rel="stylesheet" type="text/css" href="css/${style}.css">`).join('')}
  </head>
  <body>
    <nav>
      <ul class="nav_ul">
        <li class="nav_li"><img src="img/Logo_Game_Society.jpg" height="90" alt="Logo_Game_Society"></li>
        <li class="nav_li"><a class="active" href="#game">Les jeux</a></li>
        <li class="nav_li"><a href="#news">La communauté</a></li>
        <li class="nav_li"><a href="eventsList.html">Dernières parties</a></li>
        <li class="nav_li"><a href="newEvent.html">Créer un évènement</a></li>
        <li class="nav_li"><a href="login.html"><span id="login">Inscription/Connexion</span></a></li>
      </ul>
    </nav>

    <div id="content">${content}</div>

    <footer>
      <span>© 2018 Loop4</span>
    </footer>
    ${scripts.map(script => `<script type="module" src="/js/${script}.js"></script>`).join('')}
  </body>
`
