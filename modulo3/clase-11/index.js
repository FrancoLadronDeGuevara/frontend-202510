const usuaria = {
  nombre: "Ada Lovelace",
  email: "ada@adaitw.com",
  imagen:
    "https://www.primeraedicion.com.ar/wp-content/uploads/2024/10/ada-lovelace-750x375.jpg",
  edad: 37,
  direccion: {
    ciudad: "Kansas City",
    cod: 65145,
  },
};

const $card = document.querySelector(".card");
const $cardDos = document.querySelector(".cardDos");

const {
  imagen,
  nombre,
  email,
  direccion: { ciudad },
  ...rest
} = usuaria;

let error = "El email debe contener un @"; //CUANDO SABEMOS QUE ESTA VARIABLE VA A CAMBIAR EN TIEMPO DE EJECUCIÓN

console.log(rest);

$card.innerHTML = `
<img src=${imagen} alt="Imagen de Ada Lovelace"> 
<h3>${nombre}</h3>
<h6>${email}</h6>
<p>Ciudad: <span>${ciudad}</span></p>
`;

function mostrarDatos({ imagen, nombre, email, direccion }) {
  $cardDos.innerHTML = `
  <img src=${imagen} alt="Imagen de ${nombre}"> 
  <h3>Nombre: ${nombre}</h3>
  <h6>Email: ${email}</h6>
  <p>Dirección: <span>${direccion.ciudad}</span></p>
  `;
}

mostrarDatos(usuaria);

const numeros = [1, 2, 3];
const nuevosNumeros = [...numeros, 4, 5];
console.log(nuevosNumeros); // [1, 2, 3, 4, 5]
