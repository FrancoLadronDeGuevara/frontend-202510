import { alertaExito } from "../alert.js";

const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || []; //JSON -> JS
const usuarioLogueado = localStorage.getItem("usuarioLogueado") || false;

if (usuarioLogueado) {
  window.location.href = "/index.html";
}

const $formulario = document.getElementById("formulario");

$formulario.onsubmit = (evento) => {
  evento.preventDefault();

  const $emailUsuario = document.getElementById("email").value;
  const $passwordUsuario = document.getElementById("password").value;
  const $repetirPasswordUsuario =
    document.getElementById("repetir-password").value;

  if (!$emailUsuario || !$passwordUsuario || !$repetirPasswordUsuario) {
    alert("Todos los campos son obligatorios");
    return;
  }

  if ($passwordUsuario !== $repetirPasswordUsuario) {
    alert("Las contraseñas no coinciden");
    return;
  }

  const usuarioRegistrado = listaUsuarios.find(
    (usuario) => usuario.email === $emailUsuario
  );

  if (usuarioRegistrado) {
    alert("El email ya está registrado");
    return;
  }

  const nuevoUsuario = {
    email: $emailUsuario,
    password: $passwordUsuario,
  };

  listaUsuarios.push(nuevoUsuario);

  //JS -> JSON
  localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));

  alertaExito("Registro Éxitoso!");

  setTimeout(() => {
    window.location.href = "./iniciar-sesion.html";
  }, 3000);
};
