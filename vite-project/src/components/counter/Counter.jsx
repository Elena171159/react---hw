export const Counter = ({ value, increase, decrease }) => {
  return (
    <>
      <button style={{ color: "red", margin: "10px" }} onClick={increase}>
        +
      </button>
      {value}
      <button style={{ color: "blue", margin: "10px" }} onClick={decrease}>
        -
      </button>
    </>
  );
};
