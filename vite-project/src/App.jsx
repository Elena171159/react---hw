import { restaurants } from "./mock";
import { Restaurant } from "./components/restaurants";
import { Tabs } from "./components/Tabs";
import { useState } from "react";
import { Layout } from "./components/Layout";

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
    <Layout>
      <div>
        <div role="tablist">
          <Tabs items={restaurants} onChange={changeRestaurant}></Tabs>
          <Restaurant
            name={activeRestaurant.name}
            dishes={activeRestaurant.menu}
            reviews={activeRestaurant.reviews}
          ></Restaurant>
        </div>
      </div>
    </Layout>
  );
};
export default App;
