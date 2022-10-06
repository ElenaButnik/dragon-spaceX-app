import { createSlice } from "@reduxjs/toolkit";
import { getThunkData } from "../DragonItem/thunks";

export const dragonSlice = createSlice({
  name: "Dragon",
  initialState: {
    item: {},
    loading: false,
    error: null,
    status: 'idle'
  },

  extraReducers: {
    [getThunkData.pending]: (state) => {
      state.loading = true;
      state.status = 'pending';
    },

    [getThunkData.fulfilled]: (state, action) => {
      state.item = action.payload;
      state.loading = false;
      state.status = 'fulfiled';
    },

    [getThunkData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.status = 'rejected';
    },
  },
});

export default dragonSlice.reducer;