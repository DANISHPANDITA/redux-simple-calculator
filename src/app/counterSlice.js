/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "calculator",
  initialState: {
    Data: 0,
    lastOperatorUsed: "",
  },
  reducers: {
    addToPreviousData: (state, action) => {
      state.Data = action.payload;
    },
    addToLastOperator: (state, action) => {
      state.lastOperatorUsed = action.payload;
    },
  },
});

export const { addToLastOperator, addToPreviousData } = counterSlice.actions;
export const selectAddResult = (state) => state.calculator.Data;
export const selectLastOperator = (state) => state.calculator.lastOperatorUsed;
export default counterSlice.reducer;
