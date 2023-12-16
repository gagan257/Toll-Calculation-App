import { configureStore } from "@reduxjs/toolkit";
import tollCalculatorReducer from "./src/features/tollCalculatorSlice";

const store = configureStore({
  reducer: {
    tollCalculator: tollCalculatorReducer,
  },
});

export default store;
