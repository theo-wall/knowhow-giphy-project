import { StyledButton, StyledTextField } from "./SearchBar.styles";
import { InputAdornment, Box, Stack, Link } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({
  handleSearch,
}: {
  handleSearch: (searchTerms: string) => void;
}) => {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <>
      <Stack spacing={2} direction="row">
        <StyledTextField
          id="input-for-search"
          placeholder="Search GIFs"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Box>
          <StyledButton
            variant="outlined"
            onClick={() => handleSearch(searchInput)}
          >
            Search For GIFs
          </StyledButton>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/Favorites">My Saved GIFs</Link>
        </Box>
      </Stack>
    </>
  );
};

export default SearchBar;
