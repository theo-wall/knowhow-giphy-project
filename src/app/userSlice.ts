import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Favorites = {
  username: any;
  images: any;
  url: string;
  title: string;
  userName: string;
};

export interface RootProps {
  favorites: Favorites[];
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
    addFavorite: (state, action: PayloadAction<Favorites>) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite: (state, action: PayloadAction<Favorites[]>) => {
      state.favorites = action.payload;
    },
  },
});

export const { actions, reducer } = userSlice;
