import { Counter } from "./Counter";
import { useState } from "react";
export const DishCounter = () => {
  const [counter, setCounter] = useState(0);
  const add = () => {
    if (counter > 5) {
      return;
    }
    setCounter((count) => ++count);
  };
  const deleTe = () => {
    if (counter === 0) {
      return;
    }
    setCounter((count) => --count);
  };
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Counter increase={add} value={counter} decrease={deleTe}></Counter>;
};
