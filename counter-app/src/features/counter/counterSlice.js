import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // action Creators
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementBy: (state, action) => {
      state.count += action.payload;
    },
    decrementBy: (state, action) => {
      state.count -= action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// export all actions creators
export const { increment, decrement, incrementBy, decrementBy, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
