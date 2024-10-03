import { restaurants } from "../mock";
import { Restaurant } from "../components/Restaurant/Restaurants";
import { Tabs } from "../components/tabs/Tabs";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { FormReview } from "../components/review/ ReviewForm";
import { ProgressBar } from "../components/ProgressBar";
import "./App.css";

const App = () => {
  const activeId = restaurants[0].id;
  const [activeRestarauntId, setActiveRestaurant] = useState(activeId);
  const activeRestaurant = restaurants.find(
    (element) => element.id === activeRestarauntId
  );
  const changeRestaurant = (id) => {
    setActiveRestaurant(id);
  };
  return (
    <>
      <ProgressBar></ProgressBar>
      <Layout>
        <div>
          <div role="tablist">
            <Tabs items={restaurants} onChange={changeRestaurant}></Tabs>
            <Restaurant
              name={activeRestaurant.name}
              dishes={activeRestaurant.menu}
              reviews={activeRestaurant.reviews}
            ></Restaurant>
            <FormReview></FormReview>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default App;
