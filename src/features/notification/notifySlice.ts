import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

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
      state.status = false;
    },
  },
  extraReducers: () => {},
});

export const { hideNotice } = notifySlice.actions;
export const notifySelector = (state: RootState) => state.notify.status;
export default notifySlice.reducer;
