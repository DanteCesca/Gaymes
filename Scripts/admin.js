let games = JSON.parse(localStorage.getItem('storagegame')) || [
  {
      gamename : "Call of Duty Warzone",
      category : "Disparos",
      description : "Call of Duty: Warzone es un videojuego de disparos en primera persona, perteneciente al género Battle royale gratuito, lanzado el 10 de marzo de 2020 para PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S y Microsoft Windows",
      public : false,
      recomendedd : false,
      img : "./Assets/img/call-of-duty-warzone.jpg",
      urlvideo : "https://www.youtube.com/watch?v=qiR3AAnwSmo",
      date:"2017",
      author:"pepehonguito",
      company:"Aceituna Negra",
  },
  {
      gamename : "Residen Evil 4",
      category : "Terror",
      description : "Resident Evil 4,  conocido en Japón como Biohazard 4, es un videojuego de acción-aventura de disparos en tercera persona perteneciente al subgénero de terror y supervivencia desarrollado por Capcom Production Studio",
      public : false,
      recomendedd : false,
      img : "./Assets/img/residenevil4.webp",
      urlvideo : "https://www.youtube.com/watch?v=cMzJv0LOJYo",
      date:"2017",
      author:"pepehonguito",
      company:"Aceituna Negra",
  },
  {
      gamename : "Fifa 23",
      category : "Deportes",
      description : "FIFA 23 es un videojuego de simulación de fútbol publicado por Electronic Arts. Es la trigésima entrega de la serie FIFA desarrollada por EA Sports, y la última entrega bajo el estandarte de FIFA",
      public : false,
      recomendedd : false,
      img : "./Assets/img/fifa-23.png",
      urlvideo : "https://www.youtube.com/watch?v=zMyeAFzCTM0",
      date:"2017",
      author:"pepehonguito",
      company:"Aceituna Negra",
  },
  {
      gamename : "NBA 2k 24",
      category : "Deportes",
      description : "NBA 2K24 es un videojuego de baloncesto del 2023 desarrollado por Visual Concepts y publicado por 2K, basado en la National Basketball Association (NBA). Es la vigésima cuarta entrega de la franquicia NBA 2K y es el sucesor de NBA 2K23",
      public : false,
      recomendedd : false,
      img : "./Assets/img/nba2k24.jpg",
      urlvideo : "https://www.youtube.com/watch?v=OJS1BVniz5c",
      date:"2017",
      author:"pepehonguito",
      company:"Aceituna Negra",
  },
  {
      gamename : "Silent Hill 2",
      category : "Terror",
      description : "Silent Hill 2 es un videojuego de terror del subgénero de horror de supervivencia, desarrollado por Team Silent y publicado por Konami. Fue lanzado para PlayStation 2 en los Estados Unidos el 24 de septiembre de 2001, tres días después, en Japón, y el 23 de noviembre del mismo año, en Europa",
      public : false,
      recomendedd : false,
      img : "./Assets/img/silenthill2.jpg",
      urlvideo : "https://www.youtube.com/watch?v=Bia8hhHszSw",
      date:"2017",
      author:"pepehonguito",
      company:"Aceituna Negra",
  },
  {
      gamename : "GTA 5",
      category : "Disparos",
      description : "Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto en tercera persona desarrollado por el estudio escocés Rockstar North y distribuido por Rockstar Games. Este título revolucionario hizo su debut el 17 de septiembre de 2013 en las consolas Xbox 360 y PlayStation 3",
      public : false,
      recomendedd : false,
      img : "./Assets/img/gta5.jpg",
      urlvideo : "https://www.youtube.com/watch?v=QkkoHAzjnUs",
      date:"2017",
      author:"pepehonguito",
      company:"Aceituna Negra",
  },
  {
      gamename : "Assassin's Creed Mirage",
      category : "Aventura",
      description : "Assassin's Creed Mirage es un videojuego de acción y aventura desarrollado por Ubisoft Bordeaux y publicado por Ubisoft. Es la decimotercera entrega principal de la serie Assassin's Creed y el sucesor de Assassin's Creed: Valhalla de 2020.",
      public : false,
      recomendedd : false,
      img : "./Assets/img/Assassin-creed-mirage.webp",
      urlvideo : "https://www.youtube.com/watch?v=k-BGWNNvvas",
      date:"2017",
      author:"pepehonguito",
      company:"Aceituna Negra",
  },
  {
      gamename : "God of War: Ragnarök",
      category : "Aventura",
      description : "God of War Ragnarök es un videojuego de acción y aventuras en tercera persona desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment. Se lanzó en todo el mundo el 9 de noviembre de 2022 para PlayStation 4 y PlayStation 5, lo que marca el primer lanzamiento intergeneracional de la serie",
      public : false,
      recomendedd : false,
      img : "./Assets/img/god-of-war-ragnarok.webp",
      urlvideo : "https://www.youtube.com/watch?v=vtFhDrMIZjE",
      date:"2017",
      author:"pepehonguito",
      company:"Aceituna Negra",
  },
]

console.log(games)

let regexGameName = /^[a-zA-Z0-9\s]+$/u;
let regexGameImg = /\.(jpg|jpeg|png|gif|bmp)$/i;
let regexGameVid = /^(https?:\/\/)?(www\.)?(youtube\.com\/(embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
let regexGametext = /^[a-zA-Z0-9\s.,!?(){}[\]<>:'"\\/;@#$%^&*_+=-]+$/;
let regexGamenumber = /^\d+$/;

const newGame = {
  gamename : "",
  category : "",
  description: "",
  public : false,
  recomendedd : false,
  img: "",
  urlvideo: "",
}


const handleChange = (event) => {

    switch (event.target.id) {
      case 'gameName':
        if (!regexGameName.test(event.target.value)) {
          alert("El nombre del juego no debe contener caracteres especiales");
        } else {
          newGame.gamename = event.target.value;
        }
        break;
      case 'gameCategory':
        if (event.target.value === "") {
            alert("Selecciona una categoria")
        } else {
          newGame.category = event.target.value;
        }
        break;
      case 'gameImg':
        if (!regexGameImg.test(event.target.value)) {
          alert("Ingresa una Url valida");
        } else {
          newGame.img = event.target.value;
        }
      case 'gameVid':
        if (!regexGameVid.test(event.target.value)) {
          alert("Ingresa una Url valida");
        } else {
          newGame.urlvideo = event.target.value;
        }
        break;
      case 'gameDescription':
        if (!regexGametext.test(event.target.value)) {
          alert("Ingresa una descripcion");
        } else {
          newGame.description = event.target.value;
        }
        break;
      case 'gameDate':
        if (!regexGamenumber.test(event.target.value)) {
          alert("Ingresa el año de lanzamiento del juego");
        } else {
          newGame.date = event.target.value;
        }
        break;
      case 'gameAuthor':
        if (!regexGameName.test(event.target.value)) {
          alert("Ingresa el nombre del autor del juego");
        } else {
          newGame.author = event.target.value;
        }
        break;
      case 'gameCompany':
        if (!regexGameName.test(event.target.value)) {
          alert("Ingresa el nombre de la compania del juego");
        } else {
          newGame.company = event.target.value;
        }
        break;
    }
}

const handleSubmit = (event) => {
  event.preventDefault();
  const saveGame = JSON.parse(localStorage.getItem('storagegame'));
  console.log(saveGame)
  if (saveGame) {
    saveGame.push(newGame);
    const jsonGame = JSON.stringify(saveGame)
    localStorage.setItem('storagegame', jsonGame)
    window.location.reload()
  } else {
    let storagegame = games;
    storagegame.push(newGame);
    const jsonGame = JSON.stringify(storagegame)
    localStorage.setItem('storagegame', jsonGame)
    window.location.reload()
  }
}


games.map((game, index) => {
  console.log(game.public)
    tableContainer.innerHTML += `
    <tr><th scope="row" class="color-table text-white">${index}</th>
    <td class="color-table text-white">${game.gamename}</td>
    <td class="color-table text-white">${game.category}</td>
    <td class="color-table text-white">${game.description}</td>
    <td class="color-table text-white">
     <div class="form-check">
     <input class="form-check-input" type="checkbox" value="" onchange="handleClick(${index}, event)" id="checkPublick${index}" ${game.public ? 'checked' : ''}>
        <label class="form-check-label" for="checkPublick${index}">
            Publicado
        </label>
    </div>
    </td>
    <td class="color-table text-white">
    <a href="#" id="configGame${index}"><i class="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#configModal${index}"></i></a>
    <a href="#" id="deleteGame${index}" onlclick="deleteGame(index)"><i class="bi bi-trash"></i></a>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1${index}" onchange="clickRecomended(${index}, event)" ${game.recomendedd ? 'checked' : ''}>
      <label class="form-check-label" for="flexRadioDefault1${index}">
        Recomendado
      </label>
    </div>
    </td>
    </tr>
    <div class="modal fade border border-0" id="configModal${index}" tabindex="-1" aria-labelledby="configModalLabel${index}" aria-hidden="true">
      <div class="modal-dialog p-0 border border border-0 rounded bg-transparent">
        <div class="modal-content border border-0">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="configModalLabel${index}">${game.gamename}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body rounded-bottom">
              <form onsubmit="configSubmit(event)">
                  <div class="mb-3">
                      <label for="configGameName${index}" class="form-label">Cambiar Nombre del Juego</label>
                      <input type="text" class="form-control" id="configGameName${index}" maxlength="30" minlength="2" required onchange="configGamesVerify(event)">
                      <label class="form-label" for="configGameCategory${index}">Cambia la Categoria</label>
                      <select class="form-select" id="configGameCategory${index}" required onchange="configGamesVerify(event)">
                        <option selected>Seleccione una Categoria</option>
                        <option value="1">Estrategia</option>
                        <option value="2">Disparos</option>
                        <option value="3">Deportes</option>
                        <option value="4">Terror</option>
                      </select>
                      <label for="configGameImg${index}" class="form-label">Cambia la Url de imagen</label>
                      <input type="text" class="form-control" id="configGameImg${index}" minlength="14" maxlength="300" required onchange="configGamesVerify(event)">
                      <label for="configGameVid${index}" class="form-label">Cambia la Url de video</label>
                      <input type="text" class="form-control" id="configGameVid${index}" minlength="14" maxlength="300" required onchange="configGamesVerify(event)">
                      <label for="gameDate" class="form-label">Año de lanzamiento</label>
                      <input type="number" class="form-control" id="gameDate" minlength="4" maxlength="4" required onchange="configGamesVerify(event)">
                      <label for="gameAuthor" class="form-label">Nombre del Autor</label>
                      <input type="text" class="form-control" id="gameAuthor" minlength="2" maxlength="32" required onchange="configGamesVerify(event)">
                      <label for="gameCompany" class="form-label">Nombre de la Compania</label>
                      <input type="text" class="form-control" id="gameCompany" minlength="1" maxlength="70" required onchange="configGamesVerify(event)">
                      <label for="gameDescription">Descripcion del Juego</label>
                      <label for="configGameDescription${index}">Cambia la Descripcion del Juego</label>
                      <div class="form-floating">
                          <textarea class="form-control" placeholder="Escribi la descricpion del juego" id="configGameDescription${index}" maxlength="200" minlength="20" requironchange="configGamesVerify(event)"></textarea>
                      </div>
                  </div>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-outline-primary">Cambiar</button>
                  </div>
              </form>
          </div>
        </div>
      </div>
    </div>
    `
}
)

const handleClick = (index, event) => {
  if (event.target.checked) {
    games[index].public = true 
  } else {
    games[index].public = false
  }
  event.preventDefault();
  const saveGame = JSON.parse(localStorage.getItem('storagegame'));
  console.log(saveGame)
  if (saveGame) {
    saveGame.push(newGame);
    const jsonGame = JSON.stringify(saveGame)
    localStorage.setItem('storagegame', jsonGame)
  } else {
    let storagegame = games;
    storagegame.push(newGame);
    const jsonGame = JSON.stringify(storagegame)
    localStorage.setItem('storagegame', jsonGame)
  }
}

const clickRecomended = (index, event) => {
  games.map((game) => {
    game.recomendedd = false
  })
  games[index].recomendedd = true
  event.preventDefault();
  const saveGame = JSON.parse(localStorage.getItem('storagegame'));
  console.log(saveGame)
  if (saveGame) {
    saveGame.push(newGame);
    const jsonGame = JSON.stringify(saveGame)
    localStorage.setItem('storagegame', jsonGame)
  } else {
    let storagegame = games;
    storagegame.push(newGame);
    const jsonGame = JSON.stringify(storagegame)
    localStorage.setItem('storagegame', jsonGame)
  }
}

const deleteGame = (index, event) => {
    games.splice(index, 1);
  const saveGame = JSON.parse(localStorage.getItem('storagegame'));
  console.log(saveGame)
  if (saveGame) {
    saveGame.push(newGame);
    const jsonGame = JSON.stringify(saveGame)
    localStorage.setItem('storagegame', jsonGame)
    window.location.reload()
  } else {
    let storagegame = games;
    storagegame.push(newGame);
    const jsonGame = JSON.stringify(storagegame)
    localStorage.setItem('storagegame', jsonGame)
    window.location.reload()
  }
}

const configGamesVerify = (event) => {

  switch (event.target.id) {
    case `configGameName${index}`:
      if (!regexGameName.test(event.target.value)) {
        alert("El nombre del juego no debe contener caracteres especiales");
      } else {
        games[`${index}`].gamename = event.target.value;
      }
      break;
    case `configGameCategory${index}`:
      if (event.target.value === "") {
          alert("Selecciona una categoria")
      } else {
        games[`${index}`].category = event.target.value;
      }
      break;
    case `configGameImg${index}`:
      if (!regexGameImg.test(event.target.value)) {
        alert("Ingresa una Url valida");
      } else {
        games[`${index}`].img = event.target.value;
      }
    case `configGameVid${index}`:
      if (!regexGameVid.test(event.target.value)) {
        alert("Ingresa una Url valida");
      } else {
        games[`${index}`].urlvideo = event.target.value;
      }
      break;
    case `configGameDescription${index}`:
      if (!regexGametext.test(event.target.value)) {
        alert("Ingresa una descripcion");
      } else {
        games[`${index}`].description = event.target.value;
      }
      break;
  }
}

const configSubmit = (event) => {
  event.preventDefault();
  const saveGame = JSON.parse(localStorage.getItem('storagegame'));
  console.log(saveGame)
  if (saveGame) {
    saveGame.push(newGame);
    const jsonGame = JSON.stringify(saveGame)
    localStorage.setItem('storagegame', jsonGame)
    window.location.reload()
  } else {
    let storagegame = games;
    storagegame.push(newGame);
    const jsonGame = JSON.stringify(storagegame)
    localStorage.setItem('storagegame', jsonGame)
    window.location.reload()
  }
}