const container = document.getElementById('navContainer');

let urlHome;
let urlLogin;
let urladmin;
let urlicons;



if (window.location.href == 'http://127.0.0.1:5500/proyectoSegundoModulo/index.html') {
  urlHome = './index.html'
  urlLogin = './pages/login.html'
  urladmin = './pages/admin.html'
  urlicons = './assets/icons/Rolling_Games (1).png'
} else {
  urlHome = '../index.html'
  urlLogin = './login.html'
  urladmin = './admin.html'
  urlicons = '../assets/icons/Rolling_Games (1).png'
}


const authUser = JSON.parse(localStorage.getItem('authUser'));

container.innerHTML = `
  <nav class="navbar navbar-expand-lg" 
    <div class="container-fluid">
      <a class="navbar-brand " href=${urlHome}><img src="${urlicons}" alt="icono principal" class="navbaricons"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse dropdown-nav" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         </li> 
          <li class="nav-item">
            <a class="nav-link text-nav" aria-current="page" href=${urlLogin} id="loginLink">Cambiar de usuario</a>
          </li> 
          <li class="nav-item">
            <a class="nav-link  text-nav" href="#" id="logOutLink" onclick="logout()">Cerrar Sesion</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  text-nav" aria-current="page" href=${urladmin} id="registerLink">Administracion</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
`

const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');
const logoutLink = document.getElementById('logOutLink');

// if (!authUser && window.location.href == 'http://127.0.0.1:5500/proyectoSegundoModulo/index.html') {
//   window.location.href = './Pages/login.html'
// } else if (!authUser) {
//   window.location.href = '../Pages/login.html'
// } else {
//   logoutLink.className = 'nav-link text-nav'
// }

const logout = () => {
  localStorage.removeItem('authUser')
  window.location.reload()
}
