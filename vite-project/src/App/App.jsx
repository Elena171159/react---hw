import { restaurants } from "../mock";
import React from "react";
import { Restaurant } from "../components/Restaurant/Restaurants";
import { Tabs } from "../components/tabs/Tabs";
import { useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { FormReview } from "../components/review/ ReviewForm";
import styles from "./app.module.css";
import { ThemeContextProvider } from "../components/use-themes-context/theme-context";
import { AuthContextProvider } from "../components/use-theme-context-user/user-context";

const App = () => {
  const [activeRestarauntId, setActiveRestaurant] = useState(restaurants[0].id);
  const activeRestaurant = restaurants.find(
    (element) => element.id === activeRestarauntId
  );
  const changeRestaurant = (id) => {
    setActiveRestaurant(id);
  };
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Layout>
          <div className={styles.root}>
            <Tabs items={restaurants} onChange={changeRestaurant} />
            <Restaurant
              name={activeRestaurant.name}
              dishes={activeRestaurant.menu}
              reviews={activeRestaurant.reviews}
            />
            <FormReview />
          </div>
        </Layout>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};
export default App;
