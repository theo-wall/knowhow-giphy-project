import { CardMedia, CardHeader, Grid, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { StyledCard, StyledTypo } from "./GifCard.style";
import { useEffect, useState } from "react";
import { RootProps } from "../../app/userSlice";

export type CardProps = {
  item: {
    title: string;
    images: { original: { url: string } };
    user: {
      username: string;
    };
  };
  handleFavorite: (link: string) => void;
  user: RootProps;
};

const GifCard = ({ item, handleFavorite, user }: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (user.favorites.includes(item.images.original.url)) {
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
                handleFavorite(item.images.original.url);
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
          image={item.images.original.url}
          alt={item.title}
        />
      </StyledCard>
      <Box>
        <StyledTypo variant="subtitle2">{item.title}</StyledTypo>
        <StyledTypo variant="subtitle2">
          {item?.user?.username ? item?.user?.username : "no username"}
        </StyledTypo>
      </Box>
    </Grid>
  );
};

export default GifCard;
