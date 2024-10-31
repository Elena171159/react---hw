import { Menu } from "../menu/Menu";
import { Reviews } from "../review/Reviews";
import React from "react";
import styles from "./restaurant.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/restaurants";

export const Restaurant = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  return (
    <div className={styles.restaurant}>
      <Menu dishesIds={restaurant.menu} />
      <Reviews reviewsId={restaurant.reviews} />
    </div>
  );
};
