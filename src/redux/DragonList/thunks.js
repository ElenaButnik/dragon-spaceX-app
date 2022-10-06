import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = " https://api.spacexdata.com/v4/dragons";

export const getThunkDataList = createAsyncThunk(
  "getDragonList",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/");
      return data;
    } catch (error) {
      return rejectWithValue;
    }
  }
);
