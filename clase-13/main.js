import { obtenerUsuarios, crearPost } from "./api.js";

const $listaUsuarios = document.getElementById("usuarios");
const $formulario = document.getElementById("formulario");
const $post = document.getElementById("post");

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
