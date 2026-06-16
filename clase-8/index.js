const $navbarBurger = document.querySelector(".navbar-burger");
const $navbarMenu = document.querySelector(".navbar-menu");
const $botonRegistro = document.getElementById("registro");
const $botonIniciarSesion = document.getElementById("iniciar-sesion");
const $botonCerrarSesion = document.getElementById("cerrar-sesion");

const usuarioLogueado = localStorage.getItem("usuarioLogueado") || false;

$navbarBurger.onclick = () => {
  $navbarBurger.classList.toggle("is-active");
  $navbarMenu.classList.toggle("is-active");
};

if (usuarioLogueado) {
  $botonRegistro.classList.add("is-hidden");
  $botonIniciarSesion.classList.add("is-hidden");
  $botonCerrarSesion.classList.remove("is-hidden");
}

$botonCerrarSesion.onclick = () => {
  Swal.fire({
    title: "¿Cerrar Sesión?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Si, cerrar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Cerrando sesión!",
        text: "Cerraste sesión con éxito",
        icon: "success",
      });

      localStorage.removeItem("usuarioLogueado");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  });
};
