import { Button, TextField, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const StyledSearchIcon = styled(SearchIcon)({
  mr: 1,
  my: 0.5,
});

export const StyledButton = styled(Button)({
  height: "56px",
  borderRadius: 15,
  color: "black",
  border: "1px solid black",
  "&:hover": {
    backgroundColor: "lightGray",
    border: "1px solid black",
  },
});

export const StyledTextField = styled(TextField)({
  [`& fieldset`]: {
    borderRadius: 15,
  },
  width: 400,
});
