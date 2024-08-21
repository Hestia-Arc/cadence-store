import { createAsyncThunk } from "@reduxjs/toolkit";
import { Client } from "../../client";
import { IProduct } from "../types";

export const getProducts = createAsyncThunk<
  IProduct[],
  void,
  { rejectValue: string }
>("products/getProducts", async (_, thunkAPI) => {
  try {
    const response = await Client({
      method: "GET",
    //   path: "/",
        path: "/api/products",
    });

    // console.log(response);
    // const productData = response.data.map((item: IProduct) => item.productName);

    return response?.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue("Failed to fetch products.");
  }
});
