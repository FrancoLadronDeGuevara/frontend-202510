import { productos } from "../../data/datos";

function ListaProductos() {
  return (
    <div className="contenedor-productos">
      {productos.map((producto) => (
        <div key={producto.id} className="card-producto">
          <h1>{producto.nombre}</h1>
          <p>{producto.precio}</p>
          {producto.precio < 100 && (
            <div className="oferta">
              <p>Producto en oferta</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ListaProductos;
