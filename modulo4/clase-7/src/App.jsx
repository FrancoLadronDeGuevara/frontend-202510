import { Contador, Saludo } from "./components"; //BARREL IMPORT
import LucesSala from "./components/LucesSala/LucesSala";

function App() {
  return (
    <>
      <h1>Introducción a los Hooks</h1>
      <main>
        <Contador />
        <Saludo />
        <LucesSala />
      </main>
    </>
  );
}

export default App;
