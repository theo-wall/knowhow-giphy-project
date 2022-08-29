import { useState, useEffect } from "react";
import axios from "axios";
import { Favorites, RootProps } from "../app/userSlice";
import { useAppSelector } from "../app/hooks";

// getGifs is a custom hook to supply all gif arrays to return an array of desired gifs to display.

// requires:
// inFavorites boolean: to determine of it will query the Giphy API or use stored favorites in local memory
// randomize: boolean: to determine if it will return a random assortment of gifs
// page: number: allows the user to step to the next set of returned gifs

// normally I would have most of this logic in the back end and use and .env for the API key but for the front end project I did not so it could be cloned
// and run immediately

export const useGetGifs = ({
  inFavorites,
  searchTerms,
  randomize,
  page,
}: {
  inFavorites: boolean;
  searchTerms?: string;
  randomize: boolean;
  page: number;
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
          `https://api.giphy.com/v1/gifs/trending?api_key=${
            process.env.REACT_APP_GIPHY_API_KEY
          }&limit=${user.limit}&rating=g&offset=${user.limit * page}`
        );

        if (response.status === 200) {
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
            `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`
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
          `https://api.giphy.com/v1/gifs/search?limit=${user.limit}&api_key=${
            process.env.REACT_APP_GIPHY_API_KEY
          }&q=${searchTerms}&offset=${user.limit * page}`
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
  }, [searchTerms, randomize, page, inFavorites, user.limit, user.randView]);

  return { gifs, loading };
};
