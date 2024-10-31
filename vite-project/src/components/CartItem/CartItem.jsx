import { useSelector, useDispatch } from "react-redux";
import { selectDishById } from "../../../redux/dishes/index";
import { DishCounter } from "../counter/DishCounter";
export const CartItem = ({ id }) => {
  const { name } = useSelector((state) => selectDishById(state, id));

  return (
    <div>
      {name}:
      <DishCounter id={id} />
    </div>
  );
};
