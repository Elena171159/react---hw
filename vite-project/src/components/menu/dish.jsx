import React from "react";
import styles from "./menu.module.css";
import { selectDishById } from "../../../redux/dishes";
import { useSelector } from "react-redux";
import { DishCounter } from "../counter/DishCounter";
import { useAuth } from "../use-theme-context-user/useuser";
export const Dish = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const { user } = useAuth();
  return (
    <div className={styles.card} key={id}>
      <h2>
        {dish.name} - {dish.price}$
      </h2>
      <div className="ingredients">
        ingredients:{dish.ingredients.join(", ")}
      </div>
      {user && <DishCounter id={id} />}
    </div>
  );
};
