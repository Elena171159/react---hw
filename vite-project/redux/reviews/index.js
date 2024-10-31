import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../src/mockNormalized";
const initialState = {
  entities: normalizedReviews.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedReviews.map((item) => item.id),
};
export const reviewSlice = createSlice({
  name: "review",
  initialState,
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
    selectReviewsId: (state) => state.ids,
  },
});
export const { selectReviewById, selectReviewsId } = reviewSlice.selectors;
