import { Menu } from "../menu/Menu";
import { Reviews } from "../review/Review";
import React from "react";

export const Restaurant = ({ dishes, reviews }) => {
  return (
    <div>
      <Menu dishes={dishes} />
      <Reviews reviews={reviews} />
    </div>
  );
};
