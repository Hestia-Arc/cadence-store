import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface UserProp {
  username: string;
  email: string;
  password: string;
  profile_pic: string;
  checkOutDetail: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  orderHistory: {
    orderId: number;
    orderDate: string;
    orderAmount: number;
    orderStatus: string;
  }[];
  wishList: {
    id: number;
    tag: string;
    price: number;
    image: string;
    color: string;
    slashP: number;
  }[];

  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: UserProp = {
  username: "",
  email: "",
  password: "",
  profile_pic: "",
  checkOutDetail: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  },
  orderHistory: [],
  wishList: [],

  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logOutUser: (state) => {
      state.username = "";
      state.email = "";
      state.password = "";
    },
    addWishList: (state, action) => {
      state.wishList.push(action.payload);
    },
    removeWishList: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
//   extraReducers: (builder) => {
    // builder
    //   .addCase(getProducts.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(getProducts.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.products = action.payload;
    //   })
    //   .addCase(getProducts.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message || "Something went wrong...";
    //   });
//   },
});

export const { setUser, logOutUser, addWishList, removeWishList} = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
