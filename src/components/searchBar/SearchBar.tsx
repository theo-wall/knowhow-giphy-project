import { StyledButton, StyledTextField } from "./SearchBar.styles";
import { InputAdornment, Box, Stack, Link } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "../../app/hooks";
import { actions } from "../../app/userSlice";

const SearchBar = ({
  handleSearch,
}: {
  handleSearch: (searchTerms: string) => void;
}) => {
  const dispatch = useAppDispatch();
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <>
      <Stack spacing={2} direction="row">
        <StyledTextField
          id="input-for-search"
          placeholder="Search GIFs"
          onKeyDown={(e) => {
            if (e.key === "Enter" && searchInput) {
              handleSearch(searchInput);
            }
          }}
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
            disabled={!searchInput}
            onClick={() => handleSearch(searchInput)}
          >
            Search For GIFs
          </StyledButton>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link
            href="/Favorites"
            variant="body1"
            color="inherit"
            sx={{
              color: "black",
              "&:hover": {
                color: "rgb(60, 60, 60)",
              },
            }}
          >
            My Saved GIFs
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link
            component="button"
            variant="body1"
            color="inherit"
            onClick={() => {
              dispatch(actions.toggleGifView());
            }}
          >
            Randomize GIFs
          </Link>
        </Box>
      </Stack>
    </>
  );
};

export default SearchBar;
