import { createSlice } from "@reduxjs/toolkit";
import { getThunkDataList } from "./thunks";

export const dragonListSlice = createSlice({
  name: "list",
  initialState: {
    dragons: [],
    page: 1,
    perPage: 1,
    loading: false,
    error: null,
    status: "idle",
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.page = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
  },
  extraReducers: {
    [getThunkDataList.pending]: (state) => {
      state.loading = true;
      state.status = "pending";
    },

    [getThunkDataList.fulfilled]: (state, action) => {
      state.dragons = action.payload;
      state.page = action.payload;
      state.perPage = action.payload;
      state.loading = false;
      state.status = "fulfiled";
    },

    [getThunkDataList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.status = "rejected";
    },
  },
});
export default dragonListSlice.reducer;
export const {setCurrentPage, setPerPage} = dragonListSlice.actions;
