const footer = document.getElementById('footer');

let urlFacebook
let urlInstagram
let urlTwitter
let urlConocenos
let urlConsultas

if (window.location.href == '') {
urlFacebook = './pages/error404.html'
urlInstagram = './pages/error404.html'
urlTwitter = './pages/error404.html'
urlConocenos = './pages/conocenos.html'
urlConsultas = './pages/contact.html'
} else {
    urlFacebook = './error404.html'
    urlInstagram = './error404.html'
    urlTwitter = './error404.html'
    urlConocenos = './conocenos.html'
    urlConsultas = './contact.html'
}

footer.innerHTML = `
<div class="container-fluid">
<div class="row justify-content-between stylefooter text-light pt-3">
    <div class="col-3">
        <div>
            <h4>Redes Sociales</h4> 
            <div class="iconos-redes d-flex gap-3"> 
              <a href="./pages/error404.html"><i class="bi bi-facebook footer-icons"></i></a>
              <a href="./pages/error404.html" ><i class="bi bi-instagram footer-icons"></i></a>
              <a href="./pages/error404.html"><i class="bi bi-twitter footer-icons"></i></a>
            </div>
        </div>
        <div class="pb-2">
            <h4>Aplicacion</h4>
            <a href=""><i class="bi bi-google-play footer-icons"></i></a>
        </div>
    </div>
    <div class="col-3">
        <div class="d-flex justify-content-center mb-2">
            <a href=""><img class="aiconsfooter" src="./Assets/icons/Rolling_Games (1).png" alt=""></a>
        </div>
        <div class="d-flex">
            <p>©</p><p>RollingGames todos los derechos estan reservados</p>
        </div>
    </div>
    <div class="col-3">
        <div>
            <a href="./pages/conocenos.html"><h4 class="text-end pe-3 mt-3">Conocenos</h4></a>
        </div>
        <div>
            <a href="http://"><h4 class="text-end pe-3 mt-5">Consultas?</h4></a>
        </div>
    </div>
</div>
</div>
`








