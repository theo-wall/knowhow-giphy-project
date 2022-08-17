import { useGetGifs } from "../../hooks/useGetGifs";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { actions, Favorites } from "../../app/userSlice";
import { RootProps } from "../../app/userSlice";
import { Box, Grid } from "@mui/material";
import GifCard from "../gifCard/GifCard";

const GifDisplay = ({ inFavorites }: { inFavorites: boolean }) => {
  const user: RootProps = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  console.log("user", user);

  const { gifs } = useGetGifs(inFavorites);

  const handleFavorite = (favItem: Favorites) => {
    if (user.favorites.map((gif: Favorites) => gif.url).includes(favItem.url)) {
      dispatch(
        actions.removeFavorite(
          user.favorites.filter((userFav) => {
            return userFav.url !== favItem.url;
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
