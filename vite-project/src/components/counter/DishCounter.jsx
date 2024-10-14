import { Counter } from "./Counter";
import { useState, React } from "react";
import { useUserTheme } from "../use-theme-context-user/useuser";

export const DishCounter = () => {
  const { user } = useUserTheme();
  if (user === "") {
    return null;
  }
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
  return <Counter increase={add} value={counter} decrease={deleTe} />;
};
