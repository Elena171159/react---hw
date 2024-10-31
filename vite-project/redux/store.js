import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./restaurants/index";
import { dishesSlice } from "./dishes/index";
import { userslice } from "./users";
import { reviewSlice } from "./reviews";
import { cartSlice } from "./cart";
export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [userslice.name]: userslice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});
