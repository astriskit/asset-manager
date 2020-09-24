import { createSlice } from "@reduxjs/toolkit";
import { loading, setData } from "./actions";

export const dataSlice = createSlice({
  name: "global-app",
  initialState: { loading: false, data: [], error: "" },
  extraReducers: (builder) => {
    builder
      .addCase(loading, (store, action) => {
        store.loading = action.payload;
        return store;
      })
      .addCase(setData, (store, action) => {
        store.data = action.payload;
        return store;
      })
      .addDefaultCase((state) => state);
  },
});
