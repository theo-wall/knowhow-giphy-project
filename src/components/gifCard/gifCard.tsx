import { CardMedia, Grid, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledCard, StyledCardHeader, StyledTypo } from "./GifCard.style";
import { useEffect, useState } from "react";
import { Favorites, RootProps } from "../../app/userSlice";

export type CardProps = {
  item: Favorites;
  inFavorites?: boolean;
  handleFavorite: (favItem: Favorites) => void;
  user: RootProps;
};

const GifCard = ({ item, handleFavorite, user, inFavorites }: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (
      user.favorites
        .map((gif: Favorites) => gif.image_url)
        .includes(item.image_url)
    ) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [user.favorites, item]);

  return (
    <Grid item>
      <StyledCard>
        <StyledCardHeader
          action={
            <IconButton
              aria-label="favorite"
              onClick={() => {
                handleFavorite(item);
              }}
            >
              {inFavorites ? (
                <DeleteIcon
                  sx={{
                    paddingRight: 1,
                    color: "lightGray",
                  }}
                />
              ) : (
                <FavoriteIcon
                  sx={{
                    paddingRight: 1,
                    color: isFavorite ? "red" : "lightGray",
                  }}
                />
              )}
            </IconButton>
          }
        />

        <CardMedia
          component="img"
          height="280"
          image={item.image_url}
          alt={item.title}
          onClick={() => {
            window.open(item.site_url);
          }}
          sx={{ "&:hover": { cursor: "pointer" } }}
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
