import { Menu } from "./menu";
import { Reviews } from "./review";
export const Restaurant = ({ name, id, dishes, reviews }) => {
  return (
    <>
      <div id={id}>
        {name}
        <Menu dishes={dishes}></Menu>
        <Reviews reviews={reviews}></Reviews>
      </div>
    </>
  );
};
