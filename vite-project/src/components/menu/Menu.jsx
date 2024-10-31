import React from "react";
import { Dish } from "./dish";

export const Menu = ({ dishesIds }) => {
  return (
    <div>
      {dishesIds.map((dishId) => {
        return (
          <div key={dishId} id={dishId}>
            <Dish id={dishId} />
          </div>
        );
      })}
    </div>
  );
};
