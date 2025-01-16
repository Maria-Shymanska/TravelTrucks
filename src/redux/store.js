import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filters/filtersSlice";
import camperSlice from "./camper/camperSlice";

export const store = configureStore({
  reducer: {
    campers: camperSlice,
    filters: filtersSlice,
  },
});
