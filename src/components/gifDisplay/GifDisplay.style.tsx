import { styled, Box, Button } from "@mui/material";

export const ContainerBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const StyledBox = styled(Box)({
  ml: 5,
  mr: 5,
  maxWidth: "1000px",
});

export const LoadingBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
});

export const MoreButtonBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 10,
});

export const MoreButton = styled(Button)({
  color: "black",
  border: "1px solid black",
  "&:hover": {
    backgroundColor: "lightGray",
    border: "1px solid black",
  },
});
