let games = JSON.parse(localStorage.getItem('storagegame')) || [
  {
      gamename : "Call of Duty Warzone",
      category : "Disparos",
      description : "Call of Duty: Warzone es un videojuego de disparos en primera persona, perteneciente al género Battle royale gratuito, lanzado el 10 de marzo de 2020 para PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S y Microsoft Windows",
      public : false,
      recomendedd : false,
      img : "",
      urlvideo : "https://www.youtube.com/watch?v=qiR3AAnwSmo",
  },
  {
      gamename : "Residen Evil 4",
      category : "Terror",
      description : "Resident Evil 4,  conocido en Japón como Biohazard 4, es un videojuego de acción-aventura de disparos en tercera persona perteneciente al subgénero de terror y supervivencia desarrollado por Capcom Production Studio",
      public : false,
      recomendedd : false,
      img : "",
      urlvideo : "https://www.youtube.com/watch?v=cMzJv0LOJYo",
  },
  {
      gamename : "Fifa 23",
      category : "Deportes",
      description : "FIFA 23 es un videojuego de simulación de fútbol publicado por Electronic Arts. Es la trigésima entrega de la serie FIFA desarrollada por EA Sports, y la última entrega bajo el estandarte de FIFA",
      public : false,
      recomendedd : false,
      img : "",
      urlvideo : "https://www.youtube.com/watch?v=zMyeAFzCTM0",
  },
  {
      gamename : "NBA 2k 24",
      category : "Deportes",
      description : "NBA 2K24 es un videojuego de baloncesto del 2023 desarrollado por Visual Concepts y publicado por 2K, basado en la National Basketball Association (NBA). Es la vigésima cuarta entrega de la franquicia NBA 2K y es el sucesor de NBA 2K23",
      public : false,
      recomendedd : false,
      img : "",
      urlvideo : "https://www.youtube.com/watch?v=OJS1BVniz5c",
  },
  {
      gamename : "Silent Hill 2",
      category : "Terror",
      description : "Silent Hill 2 es un videojuego de terror del subgénero de horror de supervivencia, desarrollado por Team Silent y publicado por Konami. Fue lanzado para PlayStation 2 en los Estados Unidos el 24 de septiembre de 2001, tres días después, en Japón, y el 23 de noviembre del mismo año, en Europa",
      public : false,
      recomendedd : false,
      img : "",
      urlvideo : "https://www.youtube.com/watch?v=Bia8hhHszSw",
  },
  {
      gamename : "GTA 5",
      category : "Disparos",
      description : "Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto en tercera persona desarrollado por el estudio escocés Rockstar North y distribuido por Rockstar Games. Este título revolucionario hizo su debut el 17 de septiembre de 2013 en las consolas Xbox 360 y PlayStation 3",
      public : false,
      recomendedd : false,
      img : "",
      urlvideo : "https://www.youtube.com/watch?v=QkkoHAzjnUs",
  },
  {
      gamename : "Assassin's Creed Mirage",
      category : "Aventura",
      description : "Assassin's Creed Mirage es un videojuego de acción y aventura desarrollado por Ubisoft Bordeaux y publicado por Ubisoft. Es la decimotercera entrega principal de la serie Assassin's Creed y el sucesor de Assassin's Creed: Valhalla de 2020.",
      public : false,
      recomendedd : false,
      img : "",
      urlvideo : "https://www.youtube.com/watch?v=k-BGWNNvvas",
  },
  {
      gamename : "God of War: Ragnarök",
      category : "Aventura",
      description : "God of War Ragnarök es un videojuego de acción y aventuras en tercera persona desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment. Se lanzó en todo el mundo el 9 de noviembre de 2022 para PlayStation 4 y PlayStation 5, lo que marca el primer lanzamiento intergeneracional de la serie",
      public : false,
      recomendedd : false,
      img : "",
      urlvideo : "https://www.youtube.com/watch?v=vtFhDrMIZjE",
  },
]

console.log(games)

let regexGameName = /^[a-zA-Z0-9\s]+$/u;
let regexGameImg = /\.(jpg|jpeg|png|gif|bmp)$/i;
let regexGameVid = /^(https?:\/\/)?(www\.)?(youtube\.com\/(embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
let regexGametext = /^[a-zA-Z0-9\s.,!?(){}[\]<>:'"\\/;@#$%^&*_+=-]+$/;

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
  console.log(game)
    tableContainer.innerHTML += `
    <tr><th scope="row" class="color-table text-white">${index}</th>
    <td class="color-table text-white">${game.gamename}</td>
    <td class="color-table text-white">${game.category}</td>
    <td class="color-table text-white">${game.description}</td>
    <td class="color-table text-white">
     <div class="form-check">
     <input class="form-check-input" type="checkbox" value="" onchange="handleClick(${index}, event)" id="checkPublick${index}">
        <label class="form-check-label" for="checkPublick${index}">
            Publicado
        </label>
    </div>
    </td>
    <td class="color-table text-white">
    <a href="#" id="configGame${index}"><i class="bi bi-pencil"></i></a>
    <a href="#" id="deleteGame${index}" onlclick="deleteGame(index)"><i class="bi bi-trash"></i></a>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1${index}" onchange="clickRecomended(${index}, event)">
      <label class="form-check-label" for="flexRadioDefault1${index}">
        Recomendado
      </label>
    </div>
    </td>
    </tr>
    `
}
)

const handleClick = (index, event) => {
  if (event.target.checked) {
    games[index].public = true 
  } else {
    games[index].public = false
  }
}

const clickRecomended = (index, event) => {
  if (event.target.cheked) {
    games[index].recomendedd = true
  } else {
    games[index].recomendedd = false
  }
}

const deleteGame = (index) => {
  if (index >= 0 && index < games.length) {
      games.splice(index, `${index}`);
  } else {}
}