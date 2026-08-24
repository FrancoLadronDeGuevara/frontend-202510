import "./FoodCard.css";

const FoodCard = ({ service }) => {
  const { chef, food, sides, state } = service;
  return (
    <div className="food-card">
      <h2>{chef}</h2>
      <h3>{food}</h3>
      <p>Acompañamientos sugeridos: </p>
      <ul>
        {sides.map((side) => (
          <li key={side}>{side}</li>
        ))}
      </ul>
      <h5>Procedencia: {state}</h5>
    </div>
  );
};

export default FoodCard;
