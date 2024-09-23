import { createRoot } from "react-dom/client";
import { restaurants } from "./mock";

createRoot(document.getElementById("root")).render(
  <div>
    {restaurants.map((restaurant) => {
      return (
        <div>
          <h1>{restaurant.name}</h1>
          <h3>Menu</h3>
          <ul>
            {restaurant.menu.map((item) => (
              <div>
                <li>{item.name}</li>
                <p>price: {item.price}</p>
                <p>ingredients: {item.ingredients.join(" ")}</p>
              </div>
            ))}
          </ul>
          <h3>Reviews</h3>
          <ul>
            {restaurant.reviews.map((review) => (
              <li>
                <p>{review.text}</p>
                <p>stars: {review.rating}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    })}
  </div>
);
