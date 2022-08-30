import { useState, useEffect } from "react";
import { useGetTrending } from "../api/useGetTrending";
import { Favorites, RootProps } from "../app/userSlice";
import { useAppSelector } from "../app/hooks";
import { useGetRandom } from "../api/useGetRandom";
import { useGetSearch } from "../api/useGetSearch";

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
  const trendingGifs = useGetTrending(page);
  const randomGifs = useGetRandom();
  const searchGifs = useGetSearch(page, searchTerms);

  useEffect(() => {
    const getGifs = async ({
      searchTerms,
    }: {
      searchTerms: string | undefined;
    }) => {
      setLoading(true);
      if (!searchTerms && !user.randView) {
        const response = await trendingGifs;
        setGifs(response.gifResponse);
      } else if (!searchTerms && user.randView) {
        const response = await randomGifs;
        setGifs(response.randomGifArray);
      } else if (searchTerms) {
        const response = await searchGifs;
        setGifs(response.gifResponse);
      }
      setLoading(false);
    };

    if (!inFavorites) {
      getGifs({ searchTerms });
    }
  }, [searchTerms, randomize, page, inFavorites, user.limit, user.randView]);

  return { gifs, loading };
};
