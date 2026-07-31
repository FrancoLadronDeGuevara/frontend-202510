//ASI SE IMPORTA CUANDO ES CON DEFAULT
import HeroSection from "../HeroSection/HeroSection";
import "./MainSection.css";

//ASI SE IMPORTA CUANDO ES CON EXPORT MULTIPLE
import { Boton, Parrafo, Input } from "../VariosComponentes/VariosComponentes";

const MainSection = () => {
  let usuarioLogueado = false;

  const frutas = ["🥭", "🍓", "🍈", "🍊"]; //EL MAP SIRVE PARA RECORRER UN ARRAY

  return (
    <main className="container">
      <HeroSection />
      {/* OPERADOR TERNARIO */}
      {usuarioLogueado ? (
        <button>Cerrar Sesión</button>
      ) : (
        <button>Iniciar Sesión</button>
      )}
      {/* OPERADOR CORTOCIRCUITO */}
      {usuarioLogueado && <h2>Bienvenido!</h2>}

      {/*LISTA DINAMICA*/}
      <ol>
        {frutas.map((fruta) => (
          <li key={fruta}>{fruta}</li>
        ))}
      </ol>

      {/*LISTA ESTATICA*/}
      <ol>
        <li>🥭</li>
        <li>🍓</li>
        <li>🍈</li>
        <li>🍊</li>
      </ol>

      <Boton />
      <Parrafo />
      <Input />
    </main>
  );
};

export default MainSection;

//DOM -> DOCUMENT OBJECT MODEL: ES LA REPRESENTACION DEL HTML EN JAVASCRIPT
