import { createSelector } from '@reduxjs/toolkit';

const dragonState = state => state.dragon;

export const getDragonItem = createSelector(dragonState, dragon => dragon.item);
export const getLoading = createSelector(dragonState, dragon => dragon.loading);
export const getStatus = createSelector(dragonState, dragon => dragon.status);