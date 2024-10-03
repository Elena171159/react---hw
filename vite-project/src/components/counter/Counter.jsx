export const Counter = ({ getAdd, counter, getDelete }) => {
  return (
    <>
      <button style={{ color: "red", margin: "10px" }} onClick={getAdd}>
        +
      </button>
      {counter}
      <button style={{ color: "blue", margin: "10px" }} onClick={getDelete}>
        -
      </button>
    </>
  );
};
