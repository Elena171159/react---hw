import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../src/mockNormalized";
const initialState = {
  entities: normalizedUsers.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedUsers.map((item) => item.id),
};
export const userslice = createSlice({
  name: "user",
  initialState,
  selectors: {
    selectUserById: (state, id) => state.entities[id],
    selectUsersIds: (state) => state.ids,
  },
});
export const { selectUsersIds, selectUserById } = userslice.selectors;
