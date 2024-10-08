import "./Dish.css";
import React from "react";
export const Dish = ({ name, ingredients, price, key }) => {
  return (
    <div className="card" key={key}>
      <h2>
        {name} - {price}$
      </h2>
      <div className="ingredients">ingredients:{ingredients.join(", ")}</div>
    </div>
  );
};
