import { StyledButton, StyledTextField } from "./SearchBar.styles";
import { InputAdornment, Box, Stack, Link } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <>
      <Stack spacing={2} direction="row">
        <StyledTextField
          id="input-for-search"
          placeholder="Search GIFs"
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
          <StyledButton variant="outlined">Search For GIFs</StyledButton>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* <StyledButton variant="outlined">My Saved GIFs</StyledButton> */}
          <Link href="/Favorites">My Saved GIFs</Link>
        </Box>
      </Stack>
    </>
  );
};

export default SearchBar;
