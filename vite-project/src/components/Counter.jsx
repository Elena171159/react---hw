import { useState } from "react";
export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const addToBasket = () => {
    if (counter > 5) {
      return;
    }
    setCounter((count) => ++count);
  };
  const deleteFromBasket = () => {
    if (counter === 0) {
      return;
    }
    setCounter((count) => --count);
  };
  return (
    <>
      <button style={{ color: "red", margin: "10px" }} onClick={addToBasket}>
        +
      </button>
      {counter}
      <button
        style={{ color: "blue", margin: "10px" }}
        onClick={deleteFromBasket}
      >
        -
      </button>
    </>
  );
};
