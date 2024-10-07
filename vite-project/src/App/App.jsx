import { restaurants } from "../mock";
import { Restaurant } from "../components/Restaurant/Restaurants";
import { Tabs } from "../components/tabs/Tabs";
import { useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { FormReview } from "../components/review/ ReviewForm";
import "./App.css";

const App = () => {
  const [activeRestarauntId, setActiveRestaurant] = useState(restaurants[0].id);
  const activeRestaurant = restaurants.find(
    (element) => element.id === activeRestarauntId
  );
  const changeRestaurant = (id) => {
    setActiveRestaurant(id);
  };
  return (
    <Layout>
      <div role="tablist">
        <Tabs items={restaurants} onChange={changeRestaurant}></Tabs>
        <Restaurant
          name={activeRestaurant.name}
          dishes={activeRestaurant.menu}
          reviews={activeRestaurant.reviews}
        ></Restaurant>
        <FormReview></FormReview>
      </div>
    </Layout>
  );
};
export default App;
