import { Menu } from "./menu";
import { Reviews } from "./review";
export const Restaurant = ({ name, dishes, reviews }) => {
  return (
    <div>
      {name}
      <Menu dishes={dishes}></Menu>
      <Reviews reviews={reviews}></Reviews>
    </div>
  );
};
