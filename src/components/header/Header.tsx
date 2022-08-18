import { StyledHeader } from "./Header.styles";
import SearchBar from "../searchBar/SearchBar";

const Header = ({
  handleSearch,
  handleRandomize,
}: {
  handleSearch: (searchTerms: string) => void;
  handleRandomize: () => void;
}) => {
  return (
    <StyledHeader>
      <SearchBar
        handleSearch={handleSearch}
        handleRandomize={handleRandomize}
      />
    </StyledHeader>
  );
};

export default Header;
