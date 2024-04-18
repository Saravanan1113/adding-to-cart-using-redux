import { createSlice } from "@reduxjs/toolkit";
const initialUiState = {
  clicked: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducer: {
    toggle(state) {
      state.clicked = !state.clicked;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
