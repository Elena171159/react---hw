import { useSelector } from "react-redux";
import { selectCartItems } from "../../../redux/cart";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {
  const items = useSelector(selectCartItems);
  if (!items.length) {
    return null;
  }
  return (
    <div>
      <span>Cart</span>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <CartItem id={item.id} amount={item.amount} />
          </li>
        ))}
      </ul>
    </div>
  );
};
