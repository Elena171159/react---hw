export const Dish = ({ name, ingredients, price, key, counter }) => {
  return (
    <div key={key}>
      <h2>
        {name} - {price}$
      </h2>
      <div>ingredients:{ingredients.join(", ")}</div>
      {counter}
    </div>
  );
};
