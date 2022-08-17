import { useGetGifs } from "../../hooks/useGetGifs";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { actions, Favorites } from "../../app/userSlice";
import { RootProps } from "../../app/userSlice";
import { Box, Grid } from "@mui/material";
import GifCard from "../gifCard/GifCard";

const GifDisplay = ({
  inFavorites,
  searchTerms,
}: {
  inFavorites: boolean;
  searchTerms?: string;
}) => {
  const user: RootProps = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const { gifs } = useGetGifs({ inFavorites, searchTerms });
  console.log("user", user);

  const handleFavorite = (favItem: Favorites) => {
    if (
      user.favorites
        .map((gif: Favorites) => gif.image_url)
        .includes(favItem.image_url)
    ) {
      dispatch(
        actions.removeFavorite(
          user.favorites.filter((userFav) => {
            return userFav.image_url !== favItem.image_url;
          })
        )
      );
    } else {
      dispatch(actions.addFavorite(favItem));
    }
  };

  return (
    <Box sx={{ ml: 5, mr: 5 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        {inFavorites
          ? user.favorites.map((item, index) => {
              return (
                <GifCard
                  item={item}
                  key={index}
                  inFavorites={inFavorites}
                  handleFavorite={handleFavorite}
                  user={user}
                />
              );
            })
          : gifs?.map((item, index) => {
              return (
                <GifCard
                  item={item}
                  key={index}
                  handleFavorite={handleFavorite}
                  user={user}
                />
              );
            })}
      </Grid>
    </Box>
  );
};

export default GifDisplay;
