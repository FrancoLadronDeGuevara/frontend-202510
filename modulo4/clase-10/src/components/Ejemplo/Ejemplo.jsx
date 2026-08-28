import { useState } from "react";
import ContadorDos from "./ContadorDos/ContadorDos";
import ContadorUno from "./ContadorUno/ContadorUno";

const Ejemplo = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-10">
      <ContadorUno contador={count} cambiarContador={setCount} />
      <ContadorDos contador={count} cambiarContador={setCount} />
    </div>
  );
};

export default Ejemplo;
