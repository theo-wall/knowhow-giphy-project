import { StyledHeader } from "./Header.styles";
import SearchBar from "../searchBar/SearchBar";
import FavoritesHeader from "./FavoritesHeader";

const Header = ({ inFavorites }: { inFavorites: boolean }) => {
  return (
    <StyledHeader>
      {inFavorites ? <FavoritesHeader /> : <SearchBar />}
    </StyledHeader>
  );
};

export default Header;
