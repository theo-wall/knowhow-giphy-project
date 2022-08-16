import { Button, TextField, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const StyledSearchIcon = styled(SearchIcon)({
  mr: 1,
  my: 0.5,
});

export const StyledButton = styled(Button)({
  height: "56px",
  borderRadius: 15,
});

export const StyledTextField = styled(TextField)({
  [`& fieldset`]: {
    borderRadius: 15,
  },
  width: 400,
});
