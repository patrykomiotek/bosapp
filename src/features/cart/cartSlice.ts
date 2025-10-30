import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { ProductDto } from "../products/contracts/Product.dto";

export interface CartState {
  products: ProductDto[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductDto>) => {
      state.products.push(action.payload);
    },
    remove: (state, action: PayloadAction<ProductDto["id"]>) => {
      state.products = state.products.filter(
        (elem) => elem.id !== action.payload
      ); // 5
    },
    clear: (state) => {
      state.products = [];
    },
  },
});

export const { add, remove, clear } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// useStore
export const selectCount = (state: RootState) => state.cart.products.length;

export const reducer = cartSlice.reducer;
