export async function obtenerUsuarios() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await respuesta.json();
  return usuarios;
}

export async function crearPost(titulo, cuerpo, usuario) {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: titulo,
      body: cuerpo,
      userId: usuario,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const post = await respuesta.json();
  return post;
}

/*fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));*/

//JSON.parse(objeto) -> CONVIERTE DESDE JSON A JS
//JSON.stringify(objeto) -> CONVIERTE DE JS A JSON
