import GifDisplay from "../components/gifDisplay/GifDisplay";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <GifDisplay inFavorites={false} />
    </>
  );
};

export default Home;
