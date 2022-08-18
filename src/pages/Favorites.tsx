import GifDisplay from "../components/gifDisplay/GifDisplay";
import FavoritesHeader from "../components/header/FavoritesHeader";

const Favorites = () => {
  return (
    <>
      <FavoritesHeader />
      <GifDisplay inFavorites={true} randomize={false} />
    </>
  );
};

export default Favorites;
