import { Grid, styled } from "@mui/material";
import { Box, Button } from "@mui/material";

export const StyledHeader = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "7em",
});

export const StyledGridItem = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledBox = styled(Box)({
  paddingLeft: "3em",
});

export const ColorButton = styled(Button)({
  color: "black",
  border: "1px solid black",
  "&:hover": {
    backgroundColor: "lightGray",
    border: "1px solid black",
  },
});
