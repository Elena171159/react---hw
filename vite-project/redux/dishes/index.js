import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../src/mockNormalized";
const initialState = {
  entities: normalizedDishes.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};
export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  selectors: {
    selecDishesId: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
});

export const { selectDishById, selecDishesIds } = dishesSlice.selectors;
