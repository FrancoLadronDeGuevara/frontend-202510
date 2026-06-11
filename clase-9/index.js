const $nombreUsuario = document.getElementById("usuario");
const $botonIniciarSesion = document.getElementById("iniciarSesion");
const $botonCerrarSesion = document.getElementById("cerrarSesion");

const usuarioLogueado = localStorage.getItem("logueado") || false;

if (usuarioLogueado) {
  //SI HAY UN USUARIO LOGUEADO
  $botonIniciarSesion.style.display = "none";
  $nombreUsuario.innerText = "Bienvenido";

  $botonCerrarSesion.onclick = () => {
    localStorage.removeItem("logueado");

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
} else {
  //SI NO HAY UN USUARIO LOGUEADO
  $botonCerrarSesion.style.display = "none";
  $nombreUsuario.innerText = "Usuario";

  $botonIniciarSesion.onclick = () => {
    localStorage.setItem("logueado", true);

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
}
