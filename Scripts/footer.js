const footer = document.getElementById('footer');

let urlFacebook
let urlInstagram
let urlTwitter
let urlConocenos
let urlConsultas
let mainIcon

if (window.location.href == 'http://127.0.0.1:5501/index.html') {
urlFacebook = './Pages/error404.html'
urlInstagram = './Pages/error404.html'
urlTwitter = './Pages/error404.html'
urlConocenos = './Pages/aboutus.html'
urlConsultas = './Pages/contact.html'
mainIcon = './Assets/icons/Rolling_Games (1).png'
} else {
    urlFacebook = './error404.html'
    urlInstagram = './error404.html'
    urlTwitter = './error404.html'
    urlConocenos = './aboutus.html'
    urlConsultas = './contact.html'
    mainIcon = '../Assets/icons/Rolling_Games (1).png'
}

footer.innerHTML = `
<div class="container-fluid">
<div class="row justify-content-between stylefooter text-light pt-3">
    <div class="col-3">
        <div>
            <h4>Redes Sociales</h4> 
            <div class="iconos-redes d-flex gap-3"> 
              <a href="${urlFacebook}"><i class="bi bi-facebook footer-icons"></i></a>
              <a href="${urlInstagram}" ><i class="bi bi-instagram footer-icons"></i></a>
              <a href="${urlTwitter}"><i class="bi bi-twitter footer-icons"></i></a>
            </div>
        </div>
        <div class="pb-2">
            <h4>Aplicacion</h4>
            <a href="${urlTwitter}"><i class="bi bi-google-play footer-icons"></i></a>
        </div>
    </div>
    <div class="col-3">
        <div class="d-flex justify-content-center mb-2">
            <img class="aiconsfooter" src="${mainIcon}" alt="icono principal de rolling games">
        </div>
        <div class="d-flex">
            <p>©</p><p>RollingGames todos los derechos estan reservados</p>
        </div>
    </div>
    <div class="col-3">
        <div>
            <a href="${urlConocenos}"><h5 class="text-end pe-3 mt-3">Conocenos</h4></a>
        </div>
        <div>
            <a href="${urlConsultas}"><h5 class="text-end pe-3 mt-5">Consultas?</h4></a>
        </div>
    </div>
</div>
</div>
`








