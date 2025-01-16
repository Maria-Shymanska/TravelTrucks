import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./camperOperations";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const slice = createSlice({
  name: "camper",
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.items = [];
      })
      .addCase(fetchCampers.fulfilled, (state, actions) => {
        state.loading = false;
        state.items = actions.payload;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default slice.reducer;
