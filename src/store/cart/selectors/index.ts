import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";

const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    // sum all quantities in items array
    const totalQuantity = items.reduce((accumulator, item) => {
      return accumulator + (item.quantity || 0);
    }, 0);

    return totalQuantity;
  }
);

export { getCartTotalQuantitySelector };
