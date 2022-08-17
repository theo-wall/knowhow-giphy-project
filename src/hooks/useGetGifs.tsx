import { useState, useEffect } from "react";
import axios from "axios";
import { Favorites, RootProps } from "../app/userSlice";
import { useAppSelector } from "../app/hooks";

export const useGetGifs = ({
  inFavorites,
  searchTerms,
}: {
  inFavorites: boolean;
  searchTerms?: string;
}) => {
  const [gifs, setGifs] = useState<Favorites[]>();
  const user: RootProps = useAppSelector((state) => state);

  useEffect(() => {
    const getGifs = async ({
      searchTerms,
    }: {
      searchTerms: string | undefined;
    }) => {
      if (!searchTerms) {
        const response = await axios.get(
          `https://api.giphy.com/v1/gifs/trending?api_key=WnTEYVz8yJSXIH1ZF4mLgRF33Ey4oC1g&limit=${user.limit}&rating=g&offset=${user.offset}`
        );
        if (response.status === 200) {
          const gifResponse = response.data.data.map((item: Favorites) => ({
            url: item.images.original.url,
            title: item.title,
            userName: item.username,
          }));

          setGifs(gifResponse);
        }
      } else if (searchTerms) {
        console.log("searchTerms", searchTerms);
        const response = await axios.get(
          `https://api.giphy.com/v1/gifs/search?limit=${user.limit}&api_key=WnTEYVz8yJSXIH1ZF4mLgRF33Ey4oC1g&q=${searchTerms}`
        );
        if (response.status === 200) {
          const gifResponse = response.data.data.map((item: Favorites) => ({
            url: item.images.original.url,
            title: item.title,
            userName: item.username,
          }));
          console.log("gifResponse", gifResponse);
          setGifs(gifResponse);
        }
      }
    };

    if (!inFavorites) {
      getGifs({ searchTerms });
    }
  }, [searchTerms]);

  return { gifs };
};
