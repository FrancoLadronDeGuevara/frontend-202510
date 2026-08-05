import Boton from "./components/Boton/Boton";
import Card from "./components/Card/Card";
import ComponenteEnvolvente from "./components/ComponenteEnvolvente/ComponenteEnvolvente";
import Layout from "./components/Layout/Layout";

import { listaFrutas } from "./data/frutas";

function App() {
  const usuarioLogueado = false;

  return (
    <>
      <Layout>
        <main className="contenedor-principal">
          <h1>Clase 3</h1>
          <div className="contenedor-botones">
            <Boton
              texto={"Iniciar Sesión"}
              visible={usuarioLogueado}
              fondo="#02c202"
            />{" "}
            {/*props.texto = Iniciar sesion
             */}
            <Boton
              texto="Registrarse"
              visible={usuarioLogueado}
              fondo="#023fc2"
            />{" "}
            {/*props,texto =
        Registrarse*/}
          </div>
          <div className="contenedor-frutas">
            {/*EN EL CASO DE DESESTRUCTURAR, SE USAN {} JUNTO CON RETURN*/}
            {listaFrutas.map((fruta) => {
              const { nombre, emoji } = fruta;
              //fruta = {nombre: "Mango", emoji: "🥭"}
              return <Card texto={nombre} icono={emoji} />;
            })}
          </div>
          <div>
            {/*USAR {} EN UN MAP NO TIENE RETORNO IMPLICITO*/}
            {listaFrutas.map((fruta) => {
              <Card texto={fruta.nombre} icono={fruta.emoji} />;
            })}
          </div>
          <div>
            {/*USAR () EN UN MAP TIENE RETORNO IMPLICITO*/}
            {listaFrutas.map((fruta) => (
              <Card texto={fruta.nombre} icono={fruta.emoji} />
            ))}
          </div>
          <ComponenteEnvolvente>
            <p>Contenido dinámico</p>
          </ComponenteEnvolvente>
          <ComponenteEnvolvente>
            <h2>Hola</h2>
            <button>Click</button>
            <textarea placeholder="Ingresar texto" id=""></textarea>
          </ComponenteEnvolvente>
        </main>
      </Layout>
    </>
  );
}

export default App;
