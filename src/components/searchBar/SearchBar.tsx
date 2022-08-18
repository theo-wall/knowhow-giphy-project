import { LinkBox, StyledButton, StyledTextField } from "./SearchBar.styles";
import { InputAdornment, Box, Stack, Link } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchFunctions } from "../../hooks/useSearchFunctions";
import { useAppSelector } from "../../app/hooks";
import { RootProps } from "../../app/userSlice";

const SearchBar = ({
  handleSearch,
  handleRandomize,
  searchTerms,
}: {
  handleSearch: (searchTerms: string) => void;
  handleRandomize: () => void;
  searchTerms: string;
}) => {
  const user: RootProps = useAppSelector((state) => state);
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <>
      <Stack spacing={2} direction="row">
        <StyledTextField
          id="input-for-search"
          placeholder="Search GIFs"
          value={searchInput}
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
            onClick={() => handleSearch(searchInput)}
          >
            Search For GIFs
          </StyledButton>
        </Box>
        <LinkBox>
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
        </LinkBox>
        <LinkBox>
          {searchTerms ? (
            ""
          ) : (
            <Link
              component="button"
              variant="body1"
              color="inherit"
              onClick={() => {
                handleRandomize();
              }}
            >
              {user.randView ? "Back To Trending" : "Randomize GIFs"}
            </Link>
          )}
        </LinkBox>
      </Stack>
    </>
  );
};

export default SearchBar;
