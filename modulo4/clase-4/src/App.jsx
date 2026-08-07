import Alert from "./components/Alert/Alert";
import Navbar from "./components/Navbar/Navbar";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  //const edad = 60;

  const messages = {
    success: "Exito",
    pending: "Pendiente",
    failed: "Falló",
  };

  return (
    <>
      <Navbar />
      <main className="main">
        <ProductsList loadingProducts={false} />
        <Alert message={messages.pending} show />
        {/*<p>

        Operador ternario anidado

          {edad > 0 && edad <= 18
            ? "Pequeña"
            : edad > 18 && edad < 50
            ? "Adolescente"
            : "Adulta"}
        </p>*/}
      </main>
    </>
  );
}

export default App;
