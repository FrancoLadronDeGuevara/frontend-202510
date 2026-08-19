import { useState } from "react";

const Saludo = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  return (
    <div className="contenedor-saludo">
      <h2>Saludo</h2>
      <div className="contenedor-inputs">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={nombre}
          placeholder="Ingresá tu nombre"
          onChange={(e) => {
            setNombre(e.target.value);
            setMostrarAlerta(false);
          }}
          maxLength={30}
        />
      </div>
      <div className="contenedor-inputs">
        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          name="apellido"
          id="apellido"
          placeholder="Ingresá tu apellido"
          maxLength={30}
          value={apellido}
          onChange={(e) => {
            setApellido(e.target.value);
            setMostrarAlerta(false);
          }}
        />
      </div>
      <button onClick={() => setMostrarAlerta(true)}>Saludar</button>
      {mostrarAlerta && (
        <div className="alerta-saludo">
          <div className="alerta">
            <span
              onClick={() => setMostrarAlerta(false)}
              className="cerrar-alerta"
            >
              x
            </span>
            <article>{`¡Hola ${nombre} ${apellido}!`}</article>
          </div>
        </div>
      )}
    </div>
  );
};

export default Saludo;
