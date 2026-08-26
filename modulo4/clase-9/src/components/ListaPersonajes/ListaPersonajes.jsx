import { useState, useEffect } from "react";
import CardPersonaje from "../CardPersonaje/CardPersonaje";
import Skeleton from "../Skelenton/Skeleton";

const ListaPersonajes = () => {
  const [listaPersonajes, setListaPersonajes] = useState([]);
  const [estaCargando, setEstaCargando] = useState(true);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      const respuesta = await fetch(
        "https://thesimpsonsapi.com/api/characters"
      );
      const datos = await respuesta.json();
      setListaPersonajes(datos.results);
      setEstaCargando(false);
    };

    obtenerPersonajes();
  }, []);

  return (
    <div className="flex gap-4 flex-wrap justify-center items-center">
      {estaCargando
        ? [...Array(20)].map((el) => <Skeleton />)
        : listaPersonajes.map((personaje) => (
            <CardPersonaje personaje={personaje} />
          ))}
    </div>
  );
};

export default ListaPersonajes;
