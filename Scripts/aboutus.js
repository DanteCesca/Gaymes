let urlluciano
let urlsantiago
let urldante
let urlsergio

const presentacion = [{
  nombre: "Luciano", 
  apellido: "Llanos",
  edad: 23,
  hobby: "Me gustan los deportes, ir a la cancha a alentar a mi equipo CASM, ver series y peliculas",
  imgcara: "../Assets/img/luciano.jpeg"
},
{
    nombre: "Dante", 
    apellido: "Cesca",
    edad: 29,
    hobby: "me gustan las mascotas en especial los perros, pasarla bien con amigos y veneno de CASM",  
    imgcara: "../Assets/img/dante.enc"
},
{
    nombre: "Santiago", 
    apellido: "Coronel",
    edad: 19,
    hobby: "soy boxeador, me gustan los video juegos y soy fanatico de CASM",
    imgcara: "../Assets/img/santiago.jpeg"
},
{
nombre: "Sergio", 
apellido: "Diaz",
edad: 23,
hobby: "Me gusta viajar y conocer nuevos lugares, hacer amigos, leer libros y escuchar musica",
imgcara: "../Assets/img/sergio.jpeg"
}
]
const containerAboutUs = document.getElementById('aboutusContainer');
 
presentacion.map(persona => {
  containerAboutUs.innerHTML += `
      <div class="card my-3 px-0">
          <img src="${persona.imgcara}" class="card-img-top img-fluid img-persona" alt="foto de ${persona.nombre}">
          <div class="card-body">
            <h5 class="card-title text-light">${persona.nombre}  ${persona.apellido}</h5>
            <ul class="list-group list-group-flush text-light">
             <li> Edad: ${persona.edad}</li>
            </ul>
            <p class="card-text text-light">${persona.hobby}</p>
          </div>
      </div>
    `;
});

