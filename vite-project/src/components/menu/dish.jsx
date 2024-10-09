import React from "react";
import styles from "./menu.module.css";
export const Dish = ({ name, ingredients, price, key }) => {
  return (
    <div className={styles.card} key={key}>
      <h2>
        {name} - {price}$
      </h2>
      <div className="ingredients">ingredients:{ingredients.join(", ")}</div>
    </div>
  );
};
