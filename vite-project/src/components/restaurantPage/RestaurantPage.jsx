import { Tabs } from "../tabs/Tabs";
import { Restaurant } from "../Restaurant/Restaurants";
import { restaurants } from "../../mock";
import { useState } from "react";
export const RestaurantPage = () => {
  const [activeRestarauntId, setActiveRestaurant] = useState(restaurants[0].id);
  console.log(activeRestarauntId);
  const activeRestaurant = restaurants.find(
    (element) => element.id === activeRestarauntId
  );
  const changeRestaurant = (id) => {
    setActiveRestaurant(id);
  };
  return (
    <>
      <Tabs items={restaurants} onChange={changeRestaurant} />
      <Restaurant
        dishes={activeRestaurant.menu}
        reviews={activeRestaurant.reviews}
      />
    </>
  );
};
