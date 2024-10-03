import { Counter } from "./Counter";
import { useState } from "react";
export const DishCounter = () => {
  const [counter, setValue] = useState(0);
  const add = () => {
    if (counter > 5) {
      return;
    }
    setValue((count) => ++count);
  };
  const deleTe = () => {
    if (counter === 0) {
      return;
    }
    setValue((count) => --count);
  };
  return <Counter getAdd={add} counter={counter} getDelete={deleTe}></Counter>;
};
