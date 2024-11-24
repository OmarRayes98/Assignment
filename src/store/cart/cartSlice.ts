import { createSlice } from "@reduxjs/toolkit";
import {  TLoading } from "@/types/shared.types";
import { getCartTotalQuantitySelector } from "./selectors";

interface ICartState {
  items: { [key: string]: number };
  loading: TLoading;
  error: null | string;
}

const initialState: ICartState = {
  items:  JSON.parse(localStorage.getItem('items')!) ||{} ,
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }

      localStorage.setItem('items', JSON.stringify(state.items))
    },
    cartItemChangeQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
      localStorage.setItem('items', JSON.stringify(state.items))

    },
    cartItemRemove: (state, action) => {
      delete state.items[action.payload];
      localStorage.setItem('items', JSON.stringify(state.items))

    },

  },
  extraReducers: () => {

  },
});


export { getCartTotalQuantitySelector };

export const {
  addToCart,
  cartItemChangeQuantity,
  cartItemRemove,
} = cartSlice.actions;

export default cartSlice.reducer;
