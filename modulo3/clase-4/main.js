const $formulario = document.querySelector(".formulario");
const $divError = document.getElementById("error");

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const expRegNombre = /^[A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñ]{1,19}$/;
const expRegEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

$formulario.onsubmit = (e) => {
  e.preventDefault();

  const $nombre = document.getElementById("name").value;
  const $email = document.getElementById("email").value;
  const $contrasenia = document.getElementById("password").value;

  if (!expRegNombre.test($nombre)) {
    $divError.classList.remove("no-mostrar");
    $divError.innerHTML += "<p>El nombre debe ser válido</p>";
    return;
  } else {
    $divError.classList.add("no-mostrar");
    $divError.innerText = "";
  }

  if (!expRegEmail.test($email)) {
    $divError.classList.remove("no-mostrar");
    $divError.innerHTML += "<p>El email debe ser válido</p>";
    return;
  } else {
    $divError.classList.add("no-mostrar");
    $divError.innerText = "";
  }

  if (!$contrasenia) {
    //FALTA RETURN
    $divError.classList.remove("no-mostrar");
    $divError.innerHTML += "<p>La contraseña debe ser válida</p>";
    return;
  } else {
    $divError.classList.add("no-mostrar");
    $divError.innerText = "";
  }

  const usuario = {
    nombre: $nombre,
    email: $email,
    password: $contrasenia,
  };

  usuarios.push(usuario); //AGREGA UN OBJETO A UN ARRAY
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
};
