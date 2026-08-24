import { foodList } from "../../data/foods";
import FoodCard from "../FoodCard/FoodCard";

const FoodList = () => {
  return (
    <div className="food-list">
      {foodList.map((service) => (
        <FoodCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default FoodList;
