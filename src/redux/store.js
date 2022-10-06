import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import dragonSlice from "./DragonItem/reducers";
import dragonListSlice from "./DragonList/reducers";
import userSlice from "./User/reducers";
import myDragonsSlice from "./myDragons/reducers";

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};

const dragonPersistConfig = {
  key: "dragon",
  storage,
};

const myDragonPersistConfig = {
  key: "myDragon",
  storage,
};

const dragonListPersistConfig = {
  key: "myDragon",
  storage,
};

export const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userSlice),
    dragon: persistReducer(dragonPersistConfig, dragonSlice),
    dragonList: persistReducer(dragonListPersistConfig, dragonListSlice),
    myDragons: persistReducer(myDragonPersistConfig, myDragonsSlice),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
