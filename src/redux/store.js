import { configureStore } from "@reduxjs/toolkit";

import carReducer from "./car/carReducer";

const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});

export default store;
