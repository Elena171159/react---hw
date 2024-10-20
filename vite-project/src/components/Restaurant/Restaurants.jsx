import { Menu } from "../menu/Menu";
import { Reviews } from "../review/Review";

export const Restaurant = ({ dishes, reviews }) => {
  return (
    <div>
      <Menu dishes={dishes} />
      <Reviews reviews={reviews} />
    </div>
  );
};
