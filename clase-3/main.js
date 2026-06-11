const $texto = document.getElementById("texto");
const $boton = document.getElementById("boton");
const $menu = document.querySelector("#menu");
const $body = document.body;

let curso = "Frontend";

let anio = 2025;

let comision = 10;

$boton.onclick = () => {
  $body.classList.toggle("oscuro");

  $boton.innerText = "Tema claro";
};
