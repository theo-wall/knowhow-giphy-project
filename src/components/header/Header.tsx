import { StyledHeader } from "./Header.styles";
import SearchBar from "../searchBar/SearchBar";
import { SearchProps } from "../../pages/Home";

const Header = ({ handleSearch }: SearchProps) => {
  return (
    <StyledHeader>
      <SearchBar handleSearch={handleSearch} />
    </StyledHeader>
  );
};

export default Header;
