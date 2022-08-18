import { useState, useEffect } from "react";
import axios from "axios";
import { Favorites, RootProps } from "../app/userSlice";
import { useAppSelector } from "../app/hooks";

export const useGetGifs = ({
  inFavorites,
  searchTerms,
  randomize,
}: {
  inFavorites: boolean;
  searchTerms?: string;
  randomize: boolean;
}) => {
  const [gifs, setGifs] = useState<Favorites[]>();
  const [loading, setLoading] = useState(false);
  const user: RootProps = useAppSelector((state) => state);

  useEffect(() => {
    const getGifs = async ({
      searchTerms,
    }: {
      searchTerms: string | undefined;
    }) => {
      setLoading(true);
      if (!searchTerms && !user.randView) {
        const response = await axios.get(
          `https://api.giphy.com/v1/gifs/trending?api_key=WnTEYVz8yJSXIH1ZF4mLgRF33Ey4oC1g&limit=${user.limit}&rating=g&offset=${user.offset}`
        );

        if (response.status === 200) {
          console.log("response.data", response.data);
          const gifResponse = response.data.data.map(
            (item: {
              images: { original: { url: string } };
              url: string;
              title: string;
              username: string;
            }) => ({
              image_url: item.images.original.url,
              site_url: item.url,
              title: item.title,
              userName: item.username,
            })
          );

          setGifs(gifResponse);
        }
      } else if (!searchTerms && user.randView) {
        const randomGifArray: Favorites[] = [];
        for (let i = 0; i < user.limit; i++) {
          const response = await axios.get(
            `https://api.giphy.com/v1/gifs/random?api_key=WnTEYVz8yJSXIH1ZF4mLgRF33Ey4oC1g`
          );
          if (response.status === 200) {
            randomGifArray.push({
              image_url: response.data.data.images.original.url,
              site_url: response.data.data.url,
              title: response.data.data.title,
              userName: response.data.data.username,
            });
          }
        }
        setGifs(randomGifArray);
      } else if (searchTerms) {
        const response = await axios.get(
          `https://api.giphy.com/v1/gifs/search?limit=${user.limit}&api_key=WnTEYVz8yJSXIH1ZF4mLgRF33Ey4oC1g&q=${searchTerms}`
        );
        if (response.status === 200) {
          const gifResponse: Favorites[] = response.data.data.map(
            (item: {
              images: { original: { url: string } };
              url: string;
              title: string;
              username: string;
            }) => ({
              image_url: item.images.original.url,
              site_url: item.url,
              title: item.title,
              userName: item.username,
            })
          );
          setGifs(gifResponse);
        }
      }
      setLoading(false);
    };

    if (!inFavorites) {
      getGifs({ searchTerms });
    }
  }, [searchTerms, randomize]);

  return { gifs, loading };
};
