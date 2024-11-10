import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IProduct } from "../types";

interface ICartState {
  cart: IProduct[];
  subTotal: number;
  totalPrice: number;
  status: boolean;
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: ICartState = {
  cart: [],
  subTotal: 0,
  totalPrice: 0,
  status: true,
  loading: false,
  error: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemFound = state?.cart?.find((item) => {
        return item.id === action.payload.id;
      });

      if (itemFound) {
        itemFound.piece += 1;
      } else {
        state.cart = [action.payload, ...state.cart];
      }

      // const allCarts = [...new Set(state.cart?.map((item) => item))];

      const calculateSubTotal = state.cart.reduce(
        (accumulator: any, currentItem: { price: any }) => {
          return accumulator + currentItem.price;
        },
        0
      );

      state.subTotal = calculateSubTotal;

      // -------- increase price
      const total = state.cart.reduce(
        (accumulator: any, currentItem: { price: number; piece: number }) => {
          return accumulator + currentItem.price * currentItem.piece;
        },
        0
      );

      state.totalPrice = total;
    },
    removeItems: (state, action) => {
      const filtered = state.cart.filter((item) => {
        return item.id !== action.payload.id;
      });

      state.cart = [...filtered];

      // ----- sub total
      const calculateSubTotal = state.cart.reduce(
        (accumulator: any, currentItem: { price: any }) => {
          return accumulator + currentItem.price;
        },
        0
      );

      state.subTotal = calculateSubTotal;

      // ----- decrease price
      const total = state.cart.reduce(
        (accumulator: any, currentItem: { price: number; piece: number }) => {
          return accumulator + currentItem.price * currentItem.piece;
        },
        0
      );

      state.totalPrice = total;
    },
    removeAnItem: (state, action) => {
      // -------- get item
      const filteredItem = state.cart.find((item) => {
        return item.id === action.payload.id;
      });

      if (filteredItem && filteredItem?.piece > 1) {
        filteredItem.piece -= 1;
        // ----- decrease price
        const total = state.totalPrice - action.payload.price;
        state.totalPrice = total;
      } else {
        console.log("cant decrease it's 1");
      }
    },
    addShipping: (state, action) => {
      const total = state.totalPrice + action.payload;
      state.totalPrice = total;
    },
  },
});

export const { addToCart, removeItems, removeAnItem, addShipping } =
  cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
export default cartSlice.reducer;
