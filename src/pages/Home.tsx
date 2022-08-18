import GifDisplay from "../components/gifDisplay/GifDisplay";
import Header from "../components/header/Header";
import { useSearchFunctions } from "../hooks/useSearchFunctions";

const Home = () => {
  const {
    searchTerms,
    randomize,
    page,
    handleSearch,
    handleRandomize,
    handlePage,
  } = useSearchFunctions();

  return (
    <>
      <Header handleSearch={handleSearch} handleRandomize={handleRandomize} />
      <GifDisplay
        inFavorites={false}
        searchTerms={searchTerms}
        randomize={randomize}
        handlePage={handlePage}
        page={page}
      />
    </>
  );
};

export default Home;
