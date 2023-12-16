import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toll: 0,
};

const tollCalculatorSlice = createSlice({
  name: "tollCalculator",
  initialState,
  reducers: {
    calculateToll: (state, action) => {
      // Calculate the toll based on the distance
      state.toll = action.payload * 0.05; // Example calculation
    },
  },
});

export const { actions } = tollCalculatorSlice;
export default tollCalculatorSlice.reducer;
