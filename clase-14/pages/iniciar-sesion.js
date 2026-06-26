import { alertaExito } from "../alert.js";

const $formulario = document.getElementById("formulario");

$formulario.onsubmit = (evento) => {
  evento.preventDefault();

  const $emailUsuario = document.getElementById("email").value;
  const $passwordUsuario = document.getElementById("password").value;

  if (!$emailUsuario || !$passwordUsuario) {
    alert("Todos los campos son obligatorios");
    return;
  }

  const usuarioEncontrado = listaUsuarios.find(
    (usuario) =>
      usuario.email === $emailUsuario && usuario.password === $passwordUsuario
  );

  if (!usuarioEncontrado) {
    alert("El email o la contraseña son incorrectos");
    return;
  }

  alertaExito("Bienvenido!");

  setTimeout(() => {
    window.location.href = "/index.html";
  }, 3000);
};
