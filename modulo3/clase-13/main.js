import { obtenerUsuarios, crearPost, obtenerUsuario } from "./api.js";

const $listaUsuarios = document.getElementById("usuarios");
const $formulario = document.getElementById("formulario");
const $post = document.getElementById("post");
const $usuario = document.getElementById("usuario");
const $inputBusqueda = document.getElementById("buscar");
const $botonBusqueda = document.getElementById("boton-buscar");

obtenerUsuarios().then((usuarios) =>
  usuarios.map(
    (usuario) => ($listaUsuarios.innerHTML += `<li>${usuario.name}</li>`)
  )
);

$formulario.onsubmit = (e) => {
  e.preventDefault();

  const $idUsuario = document.getElementById("id-usuario").value;
  const $tituloPost = document.getElementById("titulo").value;
  const $cuerpoPost = document.getElementById("cuerpo").value;

  crearPost($tituloPost, $cuerpoPost, $idUsuario).then((post) => {
    $post.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
  });
};

$botonBusqueda.onclick = () => {
  const usuarioBuscado = $inputBusqueda.value;

  $usuario.innerHTML = "Cargando...";

  setTimeout(() => {
    obtenerUsuario(usuarioBuscado).then((usuario) => {
      $usuario.innerHTML = `
        <h2>${usuario.name}</h2>
        <p>${usuario.email}</p>
      `;
    });
  }, 2000);
};

[...Array(20)].map(
  (contenedor) =>
    ($usuario.innerHTML += `<div style="width: 30px; height: 30px; background-color: yellow; margin: 1rem;"></div>`)
);
