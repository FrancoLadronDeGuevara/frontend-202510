import "./Boton.css";

function Boton(props) {
  //Desestructuración
  const { fondo, texto = "Texto por si no le paso la props", visible } = props;

  return (
    <button
      className="boton"
      style={{ backgroundColor: fondo, display: visible ? "none" : "" }}
    >
      {texto}
    </button>
  );
}

export default Boton;
