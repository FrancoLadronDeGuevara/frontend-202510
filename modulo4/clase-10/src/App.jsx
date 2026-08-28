import CharactersList from "./components/CharactersList/CharactersList";
import Ejemplo from "./components/Ejemplo/Ejemplo";
import HeroSection from "./components/HeroSection/HeroSection";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <CharactersList />
        <Ejemplo />
      </Layout>
    </>
  );
}

export default App;
