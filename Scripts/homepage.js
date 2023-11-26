let games = JSON.parse(localStorage.getItem('storagegame')) || [
    {
        gamename : "Call of Duty Warzone",
        category : "Disparos",
        description : "Call of Duty: Warzone es un videojuego de disparos en primera persona, perteneciente al género Battle royale gratuito, lanzado el 10 de marzo de 2020 para PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S y Microsoft Windows",
        public : true,
        recomendedd : false,
        img : "./Assets/img/call-of-duty-warzone.jpg",
        urlvideo : "https://www.youtube.com/watch?v=qiR3AAnwSmo",
        date:"2017",
        author:"pepehonguito",
        company:"Aceituna Negra",
        price: 2000,
    },
    {
        gamename : "Residen Evil 4",
        category : "Terror",
        description : "Resident Evil 4,  conocido en Japón como Biohazard 4, es un videojuego de acción-aventura de disparos en tercera persona perteneciente al subgénero de terror y supervivencia desarrollado por Capcom Production Studio",
        public : true,
        recomendedd : false,
        img : "./Assets/img/residenevil4.webp",
        urlvideo : "https://www.youtube.com/watch?v=cMzJv0LOJYo",
        date:"2017",
        author:"pepehonguito",
        company:"Aceituna Negra",
        price: 2000,
    },
    {
        gamename : "Fifa 23",
        category : "Deportes",
        description : "FIFA 23 es un videojuego de simulación de fútbol publicado por Electronic Arts. Es la trigésima entrega de la serie FIFA desarrollada por EA Sports, y la última entrega bajo el estandarte de FIFA",
        public : true,
        recomendedd : false,
        img : "./Assets/img/fifa-23.png",
        urlvideo : "https://www.youtube.com/watch?v=zMyeAFzCTM0",
        date:"2017",
        author:"pepehonguito",
        company:"Aceituna Negra",
        price: 2000,
    },
    {
        gamename : "NBA 2k 24",
        category : "Deportes",
        description : "NBA 2K24 es un videojuego de baloncesto del 2023 desarrollado por Visual Concepts y publicado por 2K, basado en la National Basketball Association (NBA). Es la vigésima cuarta entrega de la franquicia NBA 2K y es el sucesor de NBA 2K23",
        public : true,
        recomendedd : false,
        img : "./Assets/img/nba2k24.jpg",
        urlvideo : "https://www.youtube.com/watch?v=OJS1BVniz5c",
        date:"2017",
        author:"pepehonguito",
        company:"Aceituna Negra",
        price: 2000,
    },
    {
        gamename : "Silent Hill 2",
        category : "Terror",
        description : "Silent Hill 2 es un videojuego de terror del subgénero de horror de supervivencia, desarrollado por Team Silent y publicado por Konami. Fue lanzado para PlayStation 2 en los Estados Unidos el 24 de septiembre de 2001, tres días después, en Japón, y el 23 de noviembre del mismo año, en Europa",
        public : true,
        recomendedd : true,
        img : "./Assets/img/silenthill2.jpg",
        urlvideo : "https://www.youtube.com/embed/Bia8hhHszSw?si=OSSacs8v6vl7e2xd",
        date:"2017",
        author:"pepehonguito",
        company:"Aceituna Negra",
        price: 2000,
    },
    {
        gamename : "GTA 5",
        category : "Disparos",
        description : "Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto en tercera persona desarrollado por el estudio escocés Rockstar North y distribuido por Rockstar Games. Este título revolucionario hizo su debut el 17 de septiembre de 2013 en las consolas Xbox 360 y PlayStation 3",
        public : true,
        recomendedd : false,
        img : "./Assets/img/gta5.jpg",
        urlvideo : "https://www.youtube.com/watch?v=QkkoHAzjnUs",
        date:"2017",
        author:"pepehonguito",
        company:"Aceituna Negra",
        price: 2000,
    },
    {
        gamename : "Assassin's Creed Mirage",
        category : "Aventura",
        description : "Assassin's Creed Mirage es un videojuego de acción y aventura desarrollado por Ubisoft Bordeaux y publicado por Ubisoft. Es la decimotercera entrega principal de la serie Assassin's Creed y el sucesor de Assassin's Creed: Valhalla de 2020.",
        public : true,
        recomendedd : false,
        img : "./Assets/img/Assassin-creed-mirage.webp",
        urlvideo : "https://www.youtube.com/watch?v=k-BGWNNvvas",
        date:"2017",
        author:"pepehonguito",
        company:"Aceituna Negra",
        price: 2000,
    },
    {
        gamename : "God of War: Ragnarök",
        category : "Aventura",
        description : "God of War Ragnarök es un videojuego de acción y aventuras en tercera persona desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment. Se lanzó en todo el mundo el 9 de noviembre de 2022 para PlayStation 4 y PlayStation 5, lo que marca el primer lanzamiento intergeneracional de la serie",
        public : true,
        recomendedd : false,
        img : "./Assets/img/god-of-war-ragnarok.webp",
        urlvideo : "https://www.youtube.com/watch?v=vtFhDrMIZjE",
        date:"2017",
        author:"pepehonguito",
        company:"Aceituna Negra",
        price: 2000,
    },
]

const gameCarouselShoot = document.getElementById('gameShootingImgCarousel');
const gameCarouselAdvent = document.getElementById('gameAdventureImgCarousel');
const gameCarouselTerror = document.getElementById('gameTerrorImgCarousel');
const gameCarouselSport = document.getElementById('gameSportsImgCarousel');

games.map((game) => {
 if (game.category == "Disparos" && game.public == true) {
    gameCarouselShoot.innerHTML +=`
        <div class="carousel-item active shoot-img">
            <a href="./Pages/error404.html">
                <img src="${game.img}" class="d-block w-100" alt="imagen de ${game.gamename}">
            </a>
        </div>
    `
 }
})


games.map((game) => {
 if (game.category == "Aventura" && game.public == true) {
    gameCarouselAdvent.innerHTML +=`
        <div class="carousel-item active shoot-img">
            <a href="./Pages/error404.html">
                <img src="${game.img}" class="d-block w-100" alt="imagen de ${game.gamename}">
            </a>
        </div>
    `
 }
})

games.map((game) => {
 if (game.category == "Terror" && game.public == true) {
    gameCarouselTerror.innerHTML +=`
        <div class="carousel-item active shoot-img">
            <a href="./Pages/error404.html">
                <img src="${game.img}" class="d-block w-100" alt="imagen de ${game.gamename}">
            </a>
        </div>
    `
 }
})

games.map((game) => {
 if (game.category == "Deportes" && game.public == true) {
    gameCarouselSport.innerHTML +=`
        <div class="carousel-item active shoot-img">
            <a href="./Pages/error404.html">
                <img src="${game.img}" class="d-block w-100" alt="imagen de ${game.gamename}">
            </a>
        </div>
    `
 }
})

const gameVidRecomended = document.getElementById('RecomendedVid')
const gameImgRecomended = document.getElementById('RecomendedImg')
const gameDescRecomended = document.getElementById('RecomendedDesc')

games.map((game) => {
    if (game.recomendedd == true && game.public == true) {
        gameVidRecomended.innerHTML +=`
       <iframe class="Video-Recomended container-fluid" src="${game.urlvideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       `
    }
})

games.map((game) => {
    if (game.recomendedd == true && game.public == true) {
        gameImgRecomended.innerHTML +=`
        <img class="img-fluid reco-img" src="${game.img}" alt="imagen de ${game.gamename}">
       `
    }
})

games.map((game) => {
    if (game.recomendedd == true && game.public == true) {
        gameDescRecomended.innerHTML +=`
        <h3>${game.gamename}</h3>
        <p>${game.description}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <a class="btn btn-outline-primary me-md-2" href="./Pages/game.html" role="button">Ver Mas</a>
        </div>
       `
    }
})