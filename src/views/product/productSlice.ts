import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IProduct } from "../types";
import { getProducts } from "./productAPIs";

interface ProductsState {
  products: IProduct[] | null;
  product: IProduct | null;
  status: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  product: null,
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
    getProduct: (state, action) => {
      if (state.products) {
        const filteredProduct = state.products.filter((item) => {
          return item.id === action.payload;
        });
        state.product = filteredProduct[0];
      } else {
        state.product = null;
      }
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

export const { hideNotice, getProduct } = productsSlice.actions;
export const productsSelector = (state: RootState) => state.products;
export default productsSlice.reducer;




