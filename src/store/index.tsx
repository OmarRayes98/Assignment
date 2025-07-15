import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/auth/authSlice";
import productReducer from "@/store/products/productsSlice";
import cartSlice from "@/store/cart/cartSlice";

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
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"], // only persist `items`
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persister = persistStore(store);

export default store;
