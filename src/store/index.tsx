import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/auth/authSlice";
import productReducer from "@/store/products/productsSlice";
import cartSlice from "@/store/cart/cartSlice";



const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        cart:cartSlice

      },
    });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


export default store