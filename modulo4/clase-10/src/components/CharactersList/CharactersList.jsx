import { useEffect, useState } from "react";
import { fetchWithAxios } from "../../api/fetchData";
import CardCharacter from "../CardCharacter/CardCharacter";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]); //estado 1
  const [isLoading, setIsLoading] = useState(true); //estado 2

  useEffect(() => {
    fetchWithAxios() //PROMESA
      .then((data) => setCharacters(data)) //SI LA PROMESA SALE BIEN
      .catch((err) => console.error(err)) //SI LA PROMESA SALE MAL
      .finally(() => setIsLoading(false)); // SE EJECUTA SI O SI
  }, []);

  if (isLoading) {
    return (
      <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-500 border-4 w-10 h-10"></div>
    );
  }

  return (
    <>
      <h2 className="text-center font-bold text-gray-900 my-6 text-6xl">
        Personajes
      </h2>
      <section className="min-h-screen flex flex-wrap items-center justify-center gap-4 p-4 m-4 border border-gray-100 rounded shadow-2xl">
        {characters.map(
          (
            c //20 personajes -> POR CADA PERSONAJE CREAME UN COMPONENTE CardCharacter
          ) => (
            <CardCharacter key={c.id} character={c} />
          )
        )}
      </section>
    </>
  );
};

export default CharactersList;
