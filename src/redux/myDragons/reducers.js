import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dragons: [],
};

const myDragonsSlice = createSlice({
  name: "myDragons",
  initialState,
  reducers: {
    setDragon(state, action) {
      state.dragons = [...state.dragons, action.payload];
    },
    removeDragon(state, action) {
        state.dragons = state.dragons.splice(
        state.dragons.find((item) => {
          return item.id === action.payload.id;
        }),
        0
      );
    },
  },
});

export const { setDragon, removeDragon } = myDragonsSlice.actions;

export default myDragonsSlice.reducer;
