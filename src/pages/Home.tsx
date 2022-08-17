import GifDisplay from "../components/gifDisplay/GifDisplay";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header inFavorites={false} />
      <GifDisplay inFavorites={false} />
    </>
  );
};

export default Home;
