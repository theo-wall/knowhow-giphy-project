import { CardMedia, CardHeader, Grid, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { StyledCard, StyledTypo } from "./GifCard.style";
import { useEffect, useState } from "react";
import { Favorites, RootProps } from "../../app/userSlice";

export type CardProps = {
  item: Favorites;
  handleFavorite: (favItem: Favorites) => void;
  user: RootProps;
};

const GifCard = ({ item, handleFavorite, user }: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (user.favorites.map((gif: Favorites) => gif.url).includes(item.url)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [user.favorites]);

  return (
    <Grid item>
      <StyledCard>
        <CardHeader
          action={
            <IconButton
              aria-label="favorite"
              onClick={() => {
                handleFavorite(item);
              }}
            >
              <FavoriteIcon
                sx={{
                  paddingRight: 1,
                  color: isFavorite
                    ? "rgb(255, 0, 0, 0.5)"
                    : "rgb(100, 100, 100, 0.5)",
                }}
              />
            </IconButton>
          }
          sx={{ height: 0, padding: 0 }}
        />

        <CardMedia
          component="img"
          height="280"
          image={item.url}
          alt={item.title}
        />
      </StyledCard>
      <Box>
        <StyledTypo variant="subtitle2">{item.title}</StyledTypo>
        <StyledTypo variant="subtitle2">
          {item?.userName ? item?.userName : "no username"}
        </StyledTypo>
      </Box>
    </Grid>
  );
};

export default GifCard;
