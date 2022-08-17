import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RootProps {
  favorites: string[];
  limit: number;
  offset: number;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    favorites: new Array(),
    limit: 10,
    offSet: 0,
  },
  reducers: {
    addFavorite: (state, action: PayloadAction<string[]>) => {
      state.favorites = [...state.favorites, ...action.payload];
    },
  },
});

export const { actions, reducer } = userSlice;
