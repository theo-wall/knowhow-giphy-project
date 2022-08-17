import { Box, Button, Grid, Typography } from "@mui/material";
import { StyledHeader } from "./Header.styles";
const FavoritesHeader = () => {
  return (
    <StyledHeader>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box sx={{ paddingLeft: "3em" }}>
            <Button href="/">Back</Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography component="span" variant="h4">
            Your Gifs
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </StyledHeader>
  );
};

export default FavoritesHeader;
