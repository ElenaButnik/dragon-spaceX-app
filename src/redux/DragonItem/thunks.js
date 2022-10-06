import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDragon } from "../../services/API";
export const getThunkData = createAsyncThunk(
  "getDragon",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchDragon();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
