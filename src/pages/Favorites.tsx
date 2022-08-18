import GifDisplay from "../components/gifDisplay/GifDisplay";
import FavoritesHeader from "../components/header/FavoritesHeader";
import { useSearchFunctions } from "../hooks/useSearchFunctions";

const Favorites = () => {
  const { handlePage } = useSearchFunctions();
  return (
    <>
      <FavoritesHeader />
      <GifDisplay
        inFavorites={true}
        randomize={false}
        page={0}
        handlePage={handlePage}
      />
    </>
  );
};

export default Favorites;
