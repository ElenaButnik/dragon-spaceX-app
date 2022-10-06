import { createSelector } from "@reduxjs/toolkit";

const dragonListState = (state) => state.dragonList;

export const getDragonList = createSelector(
  dragonListState,
  (dragonList) => dragonList.dragons
);

