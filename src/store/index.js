import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./slice/ui-slice";

const store = configureStore({
  reducer: { ui: uiReducer },
});

export default store;
