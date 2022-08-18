import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { actions, RootProps } from "../app/userSlice";

// all states, handlers, and logic for controlling the search bar are stored here. Things that I wanted to stored locally are dispatched here
// and things I wanted to remain in state until the page was refreshed were handled with useState.

export type SearchProps = {
  inFavorites: boolean;
  handleSearch: (searchTerms: string) => void;
};

export const useSearchFunctions = () => {
  const dispatch = useAppDispatch();
  const user: RootProps = useAppSelector((state) => state);
  const [searchTerms, setSearchTerms] = useState("");
  const [randomize, setRandomize] = useState(user.randView);
  const [page, setPage] = useState(0);

  const handleSearch = (searchTerms: string) => {
    setSearchTerms(searchTerms);
  };
  const handleRandomize = () => {
    setRandomize(!randomize);
    dispatch(actions.toggleGifView());
  };
  const handlePage = () => {
    setPage(page + 1);
  };
  return {
    searchTerms,
    randomize,
    page,
    handleSearch,
    handleRandomize,
    handlePage,
  };
};
