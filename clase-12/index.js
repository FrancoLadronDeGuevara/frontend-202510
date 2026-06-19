//CUANDO YO HAGO UNA PETICION RECIBO UNA PROMESA

/*
PIDO LOS PERSONAJES DE LOS SIMPSONS (PETICION O REQUEST)

PROMESA -> RESPUESTA
ME DEVUELVE LOS PERSONAJES (RESPUESTA CON EXITO)
NO ME DEVUELVE LOS PERSONAJES (HAY UN ERROR)
*/

const $listaUsuarios = document.getElementById("contenedor-usuarios");

fetch("https://thesimpsonsapi.com/api/characters")
  .then((respuesta) => respuesta.json())
  .then((personajes) =>
    personajes.results.map(
      (char) =>
        ($listaUsuarios.innerHTML += `<img src=https://cdn.thesimpsonsapi.com/200${char.portrait_path}>`)
    )
  )
  .catch((error) => console.log(error));
