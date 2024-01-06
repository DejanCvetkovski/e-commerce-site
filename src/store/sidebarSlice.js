import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarOn: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarOn: (state) => {
      state.isSideBarOn = true;
    },
    setSidebarOff: (state) => {
      state.isSideBarOn = false;
    },
  },
});

export const { setSidebarOn, setSidebarOff } = sidebarSlice.actions;
export const getSidebarStatus = (state) => state.sidebar.isSideBarOn;
export default sidebarSlice.reducer;
