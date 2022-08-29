import { useState, useEffect } from "react";
import axios from "axios";
import { baseRandomURL, baseTrendingURL, baseSearchURL } from "./GiphyBaseUrl";
import { Favorites, RootProps } from "../app/userSlice";
import { useAppSelector } from "../app/hooks";

type GiphyResponseType = {
  images: { original: { url: string } };
  url: string;
  title: string;
  username: string;
};

export const useGetTrending = async (page: number) => {
  const user: RootProps = useAppSelector((state) => state);
  const response = await axios.get(
    `${baseTrendingURL}&limit=${user.limit}&rating=g&offset=${
      user.limit * page
    }`
  );

  const gifResponse: Favorites[] = await response.data.data.map(
    (item: GiphyResponseType) => ({
      image_url: item.images.original.url,
      site_url: item.url,
      title: item.title,
      userName: item.username,
    })
  );

  return { gifResponse };
};
