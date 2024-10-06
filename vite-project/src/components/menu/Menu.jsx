import { Dish } from "./dish";
import { DishCounter } from "../counter/DishCounter";
export const Menu = ({ dishes }) => {
  if (dishes.length <= 0) {
    return <h2>No Menu</h2>;
  }
  return (
    <div>
      {dishes.map((dish) => (
        <div key={dish.id}>
          <Dish
            name={dish.name}
            ingredients={dish.ingredients}
            price={dish.price}
          ></Dish>
          <DishCounter />
        </div>
      ))}
    </div>
  );
};
