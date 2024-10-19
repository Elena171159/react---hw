import { Menu } from "../menu/Menu";
import { Reviews } from "../review/Review";
import React from "react";
import styles from "./restaurant.module.css";

export const Restaurant = ({ dishes, reviews, }) => {
  return (
    <div className={styles.restaurant}>
      <Menu dishes={dishes} />
      <Reviews reviews={reviews} />
    </div>
  );
};
