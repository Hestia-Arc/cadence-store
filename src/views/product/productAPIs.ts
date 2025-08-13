import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../types";
import supabase from "../../services/supabase";

export const getProducts = createAsyncThunk<IProduct[] | null, void>(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const { data: products } = await supabase
        .from("productV2")
        .select();

      // console.log(products);
      return products;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue("Failed to fetch products.");
    }
  }
);
