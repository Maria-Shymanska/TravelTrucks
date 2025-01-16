import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk(
  "campers/getAll",
  async (_, thuncApi) => {
    try {
      const response = await axios.get();
      return response.data;
    } catch (e) {
      return thuncApi.rejectWithValue(e.message);
    }
  }
);
