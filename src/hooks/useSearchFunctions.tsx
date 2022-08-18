import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { actions, RootProps } from "../app/userSlice";

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
