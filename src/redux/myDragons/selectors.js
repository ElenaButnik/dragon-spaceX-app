import { createSelector } from "@reduxjs/toolkit";
const myDragonListState = (state) => state.myDragons;

export const getMyDragonList = createSelector(
  myDragonListState,
  (myDragons) => myDragons.dragons
);
