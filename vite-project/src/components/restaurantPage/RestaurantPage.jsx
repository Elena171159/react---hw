import { Tabs } from "../tabs/Tabs";
import { Restaurant } from "../Restaurant/Restaurants";
import { restaurants } from "../../mock";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectRestaurantsIds,
  selectRestaurantById,
} from "../../../redux/restaurants";
export const RestaurantPage = () => {
  const reduxRests = useSelector(selectRestaurantsIds);
  const [activeRestarauntId, setActiveRestaurant] = useState(reduxRests[0]);

  const activeRest = useSelector((state) =>
    selectRestaurantById(state, activeRestarauntId)
  );

  const changeRestaurant = (id) => {
    setActiveRestaurant(id);
  };
  return (
    <>
      <Tabs items={restaurants} onChange={changeRestaurant} />
      <Restaurant dishes={activeRest.menu} id={activeRest.id} />
    </>
  );
};
