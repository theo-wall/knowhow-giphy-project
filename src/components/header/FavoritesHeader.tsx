import { Grid, Typography } from "@mui/material";
import {
  StyledHeader,
  StyledGridItem,
  StyledBox,
  ColorButton,
} from "./Header.styles";
import UndoIcon from "@mui/icons-material/Undo";
const FavoritesHeader = () => {
  return (
    <StyledHeader>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <StyledBox>
            <ColorButton href="/" variant="outlined" startIcon={<UndoIcon />}>
              Back
            </ColorButton>
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
