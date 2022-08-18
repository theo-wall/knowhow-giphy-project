import GifDisplay from "../components/gifDisplay/GifDisplay";
import Header from "../components/header/Header";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useState, useEffect } from "react";
import { actions, RootProps } from "../app/userSlice";

export type SearchProps = {
  inFavorites: boolean;
  handleSearch: (searchTerms: string) => void;
};

const Home = () => {
  const dispatch = useAppDispatch();
  const user: RootProps = useAppSelector((state) => state);
  const [searchTerms, setSearchTerms] = useState("");
  const [randomize, setRandomize] = useState(user.randView);

  const handleSearch = (searchTerms: string) => {
    setSearchTerms(searchTerms);
  };
  const handleRandomize = () => {
    setRandomize(!randomize);
    dispatch(actions.toggleGifView());
  };

  return (
    <>
      <Header
        // inFavorites={false}
        handleSearch={handleSearch}
        handleRandomize={handleRandomize}
      />
      <GifDisplay
        inFavorites={false}
        searchTerms={searchTerms}
        randomize={randomize}
      />
    </>
  );
};

export default Home;
