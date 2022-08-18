import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Favorites = {
  // url: any;
  // username: any;
  // images: any;
  image_url: string;
  site_url: string;
  title: string;
  userName: string;
};

export interface RootProps {
  favorites: Favorites[];
  randView: boolean;
  limit: number;
  offset: number;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    favorites: new Array(),
    randView: false,
    limit: 12,
    offSet: 0,
  },
  reducers: {
    addFavorite: (state, action: PayloadAction<Favorites>) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite: (state, action: PayloadAction<Favorites[]>) => {
      state.favorites = action.payload;
    },
    toggleGifView: (state) => {
      state.randView = !state.randView;
    },
  },
});

export const { actions, reducer } = userSlice;
