import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    favorites: ["NOFAV"],
    limit: 10,
    offSet: 0,
  },
  reducers: {
    addFavorite: (state, action: PayloadAction<string[]>) => {
      state.favorites = action.payload;
    },
  },
});

export const { actions, reducer } = userSlice;
