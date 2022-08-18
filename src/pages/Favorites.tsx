import GifDisplay from "../components/gifDisplay/GifDisplay";
import FavoritesHeader from "../components/header/FavoritesHeader";

const Favorites = () => {
  const handlePage = () => {
    console.log("hi");
  };
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
