import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TProduct } from "@/types/shared.types";
import { getCartTotalQuantitySelector } from "./selectors";

export interface CartItem {
  info: TProduct;
  quantity: number;
}

interface ICartState {
  items: CartItem[];
  loading: TLoading;
  error: null | string;
}

const initialState: ICartState = {
  items:  [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload?._id;
      const existingItem = state.items.find((item) => item.info?._id === id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        const newItem = {
          quantity: 1,
          info: action.payload,
        };
        state.items.push(newItem);
      }

      
    },
    cartItemChangeQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.info?._id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
      }
      
    },
    //by id
    cartItemRemove: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter((item) => item.info._id !== idToRemove);
      
    },
    clearCart: (state) => {
      state.items = [];
      
    },
  },
  extraReducers: () => {},
});

export { getCartTotalQuantitySelector };

export const { addToCart, cartItemChangeQuantity, cartItemRemove, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
