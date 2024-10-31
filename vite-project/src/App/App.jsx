import React from "react";
import { Layout } from "../components/Layout/Layout";
import { FormReview } from "../components/review/ ReviewForm";
import styles from "./app.module.css";
import { ThemeContextProvider } from "../components/use-themes-context/theme-context";
import { AuthContextProvider } from "../components/use-theme-context-user/user-context";
import { RestaurantPage } from "../components/restaurantPage/RestaurantPage";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <div className={styles.root}>
              <RestaurantPage />
              <FormReview />
            </div>
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
export default App;
