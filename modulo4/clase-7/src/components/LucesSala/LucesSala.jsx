import { useState } from "react";

const LucesSala = () => {
  const [lucesEncendidas, setLucesEncendidas] = useState(false);

  return (
    <div
      className={`luces-sala ${
        lucesEncendidas ? "luces-prendidas" : "luces-apagadas"
      }`}
    >
      <button onClick={() => setLucesEncendidas(!lucesEncendidas)}>
        {lucesEncendidas ? "Apagar" : "Prender"}
      </button>
    </div>
  );
};

export default LucesSala;
