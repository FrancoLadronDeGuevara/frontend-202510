import "./Card.css";

const Card = ({ texto, icono }) => {
  return (
    <div className="tarjeta">
      <h2>{texto}</h2>
      <h4>{icono}</h4>
    </div>
  );
};

export default Card;
