import { useState } from "react";

const Contador = () => {
  const [contador, cambiarContador] = useState(0);

  return (
    <div className="contenedor-contador">
      <h2>Contador</h2>
      <div className="contenedor-botones">
        <button onClick={() => cambiarContador(contador - 1)}>-</button>
        <span>{contador}</span>
        <button onClick={() => cambiarContador(contador + 1)}>+</button>
      </div>
      <div className="contenedor-botones">
        <button onClick={() => cambiarContador(0)}>Resetear</button>
      </div>
    </div>
  );
};

export default Contador;
