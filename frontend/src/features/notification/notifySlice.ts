import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface NotifyState {
    status: boolean
  }
  
  // Define the initial state using that type
  const initialState: NotifyState = {
    status: true,
  }

const notifySlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    hideNotice: (state) => {
      state.status = true;
    },
  },
  extraReducers: () => {},
});

export const { hideNotice } = notifySlice.actions;

export default notifySlice?.reducer;
