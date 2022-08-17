import { Box, Button, Grid, Typography } from "@mui/material";
import { StyledHeader, StyledGridItem, StyledBox } from "./Header.styles";
const FavoritesHeader = () => {
  return (
    <StyledHeader>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <StyledBox>
            <Button href="/">Back</Button>
          </StyledBox>
        </Grid>
        <StyledGridItem item xs={8}>
          <Typography component="span" variant="h4">
            Your Gifs
          </Typography>
        </StyledGridItem>
        <Grid item xs={2}></Grid>
      </Grid>
    </StyledHeader>
  );
};

export default FavoritesHeader;
