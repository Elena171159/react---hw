import React from "react";
import { Dish } from "./dish";
import { DishCounter } from "../counter/DishCounter";
import { useAuth } from "../use-theme-context-user/useuser";
export const Menu = ({ dishes }) => {
  if (dishes.length <= 0) {
    return <h2>No Menu</h2>;
  }
  const { user } = useAuth();
  return (
    <div>
      {dishes.map((dish) => (
        <div key={dish.id}>
          <Dish
            name={dish.name}
            ingredients={dish.ingredients}
            price={dish.price}
          />
          {user && <DishCounter />}
        </div>
      ))}
    </div>
  );
};
