import { Grid, styled } from "@mui/material";
import { Box } from "@mui/material";

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
