import { createAsyncThunk } from "@reduxjs/toolkit";
// import { IProduct } from "../types";
import supabase from "../../services/supabase";

export const getProducts = createAsyncThunk<any, void>(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      let { data: products, } = await supabase
        .from("products")
        .select();

      console.log(products);
      return products;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Failed to fetch products.");
    }
  }
);
