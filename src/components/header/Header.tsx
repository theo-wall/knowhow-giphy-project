import { StyledHeader } from "./Header.styles";
import SearchBar from "../searchBar/SearchBar";

const Header = ({
  handleSearch,
  handleRandomize,
  searchTerms,
}: {
  handleSearch: (searchTerms: string) => void;
  handleRandomize: () => void;
  searchTerms: string;
}) => {
  return (
    <StyledHeader>
      <SearchBar
        handleSearch={handleSearch}
        handleRandomize={handleRandomize}
        searchTerms={searchTerms}
      />
    </StyledHeader>
  );
};

export default Header;
