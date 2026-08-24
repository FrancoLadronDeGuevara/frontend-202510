import { usuaria } from "../../data/datos";

function PerfilUsuaria() {
  const { nombre, edad, estado } = usuaria;

  return (
    <div className="perfil-usuaria">
      <h1>{nombre}</h1>
      <h2>{edad < 18 ? "Es menor de edad 👼" : "Es mayor de edad 🧓"}</h2>
      <div
        className={`estado ${
          estado === "ACTIVA"
            ? "activa"
            : estado === "INACTIVA"
            ? "inactiva"
            : "invitada"
        }`}
      >
        <p>{estado}</p>
      </div>
    </div>
  );
}

export default PerfilUsuaria;
