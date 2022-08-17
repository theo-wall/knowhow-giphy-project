import GifDisplay from "../components/gifDisplay/GifDisplay";
import Header from "../components/header/Header";
import { useState, useEffect } from "react";

export type SearchProps = {
  inFavorites: boolean;
  handleSearch: (searchTerms: string) => void;
};

const Home = () => {
  const [searchTerms, setSearchTerms] = useState("");
  const handleSearch = (searchTerms: string) => {
    setSearchTerms(searchTerms);
  };

  return (
    <>
      <Header inFavorites={false} handleSearch={handleSearch} />
      <GifDisplay inFavorites={false} searchTerms={searchTerms} />
    </>
  );
};

export default Home;
