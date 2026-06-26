export async function obtenerProductos() {
  const respuesta = await fetch("http://localhost:4000/api/productos/obtener");
  const productos = await respuesta.json();
  return productos.data;
}

export async function crearProducto(producto) {
  const respuesta = await fetch("http://localhost:4000/api/productos/crear", {
    method: "POST",
    body: JSON.stringify(producto),
    headers: {
      "Content-type": "application/json",
    },
  });
  const productoCreado = await respuesta.json();
  return productoCreado;
}
