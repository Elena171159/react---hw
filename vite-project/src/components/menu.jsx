import { Dish } from "./dish";
import { Counter } from "./Counter";
export const Menu = ({ dishes }) => {
  if (dishes.length <= 0) {
    return <h2>No Menu</h2>;
  }
  return (
    <div>
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          name={dish.name}
          ingredients={dish.ingredients}
          price={dish.price}
          counter={<Counter></Counter>}
        ></Dish>
      ))}
    </div>
  );
};
