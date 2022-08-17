import GifDisplay from "../components/gifDisplay/GifDisplay";
import Header from "../components/header/Header";

const Favorites = () => {
  return (
    <>
      <Header inFavorites={true} />
      <GifDisplay inFavorites={true} />
    </>
  );
};

export default Favorites;
