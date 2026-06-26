import { alertaExito } from "./alert.js";
import { obtenerProductos, crearProducto } from "./api/api.js";

const $navbarBurger = document.querySelector(".navbar-burger");
const $navbarMenu = document.querySelector(".navbar-menu");
const $botonRegistro = document.getElementById("registro");
const $botonIniciarSesion = document.getElementById("iniciar-sesion");
const $botonCerrarSesion = document.getElementById("cerrar-sesion");
const $listadoProductos = document.getElementById("listado");

const $formulario = document.getElementById("formulario");

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

obtenerProductos()
  .then((lista) =>
    lista.map(
      (producto) =>
        ($listadoProductos.innerHTML += `
  <div class="card">
  <header class="card-header">
    <p class="card-header-title">${producto.name} - $${producto.price}</p>
    <button class="button is-primary" aria-label="more options">
      Comprar
    </button>
  </header>
</div>
`)
    )
  )
  .catch((error) => console.log(error));

$formulario.onsubmit = (e) => {
  e.preventDefault();

  const $nombreProducto = document.getElementById("nombre").value;
  const $precioProducto = document.getElementById("precio").value;
  const $descripcionProducto = document.getElementById("descripcion").value;
  const $marcaProducto = document.getElementById("marca").value;
  const $categoriaProducto = document.getElementById("categoria").value;

  const nuevoProducto = {
    name: $nombreProducto,
    price: $precioProducto,
    description: $descripcionProducto,
    brand: $marcaProducto,
    category: $categoriaProducto,
  };

  crearProducto(nuevoProducto)
    .then((producto) => {
      $listadoProductos.innerHTML += `
    <div class="card">
    <header class="card-header">
      <p class="card-header-title">${producto.data.name} - $${producto.data.price}</p>
      <button class="button is-primary" aria-label="more options">
        Comprar
      </button>
    </header>
  </div>
  `;
    })
    .catch((error) => alertaExito(error.message, "error"));

  alertaExito("Producto creado con éxito", "success");
};
