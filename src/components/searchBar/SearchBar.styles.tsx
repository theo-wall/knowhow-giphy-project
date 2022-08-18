import { Button, TextField, styled, Box } from "@mui/material";

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

export const LinkBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});
