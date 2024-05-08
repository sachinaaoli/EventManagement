import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import RootReducer from "./RootReducer";

const Store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: [thunk],
      serializableCheck: false,
     
    }),
});

export const persistor = persistStore(Store);
export default Store;
