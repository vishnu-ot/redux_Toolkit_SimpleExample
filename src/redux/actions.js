import { createSlice } from "@reduxjs/toolkit";
const initialState = { count: 0, data: [] };
const createAction = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.count = state.count + 1;
    },

    decrementCount: (state) => {
      state.count = state.count - 1;
    },
    resetCount: (state) => {
      state.count = 0;
    },
  },
});

export const { incrementCount, decrementCount, resetCount } =
  createAction.actions;
export default createAction.reducer;
