import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cart from "@/store/cartSlice";

const persistConfig = {
  key: "root", //Название ключа в localStorage
  storage,
};

const rootReducer = combineReducers({ cart });
const persistedReducer = persistReducer(persistConfig, rootReducer);
const setupStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
const persistor = persistStore(setupStore());

export { setupStore, persistor };
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
