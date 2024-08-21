import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IProduct } from "../types";
import { getProducts } from "./productAPIs";

interface ProductsState {
  products: IProduct[];
  status: boolean;
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: ProductsState = {
  products: [],
  status: true,
  loading: false,
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    hideNotice: (state) => {
      state.status = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong...";
      });
  },
});

export const { hideNotice } = productsSlice.actions;
export const productsSelector = (state: RootState) => state.products;
export default productsSlice.reducer;
