import ListaProductos from "./components/ActividadUno/ListaProductos";
import PerfilUsuaria from "./components/ActividadDos/PerfilUsuaria";

function App() {
  return (
    <>
      <section>
        <h2>Actividad 1</h2>
        <ListaProductos />
      </section>
      <section>
        <h2>Actividad 2</h2>
        <PerfilUsuaria />
      </section>
    </>
  );
}

export default App;
