const $tituloH3 = document.querySelector("h3");

$tituloH3.classList.add("boton");

const $tituloH6 = document.createElement("h6");

const textoH6 = document.createTextNode("Hola 6");

$tituloH6.appendChild(textoH6);

$tituloH6.classList.add("title");

document.body.appendChild($tituloH6);
