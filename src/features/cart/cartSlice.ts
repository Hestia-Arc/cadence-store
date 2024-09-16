import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IProduct } from "../types";

interface ICartState {
  cart: IProduct[];
  status: boolean;
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: ICartState = {
  cart: [],
  status: true,
  loading: false,
  error: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [action.payload, ...state.cart];

    },
  },
});

export const { addToCart } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
export default cartSlice.reducer;
