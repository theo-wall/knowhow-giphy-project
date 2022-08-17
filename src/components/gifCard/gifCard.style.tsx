import { styled, Card, Typography } from "@mui/material";

export const StyledCard = styled(Card)({
  width: "200px",
  height: "200px",
});

export const StyledTypo = styled(Typography)({
  width: "200px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "1",
  WebkitBoxOrient: "vertical",
});
