import { useGetGifs } from "../../hooks/useGetGifs";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { actions } from "../../app/userSlice";
import { RootProps } from "../../app/userSlice";
import { Box, Grid } from "@mui/material";
import GifCard from "../gifCard/GifCard";

const GifDisplay = () => {
  const user: RootProps = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  console.log("user", user);

  const { gifs } = useGetGifs();

  const handleFavorite = (link: string) => {
    if (user.favorites.includes(link)) {
      dispatch(
        actions.removeFavorite(
          user.favorites.filter((fav: string) => {
            return fav !== link;
          })
        )
      );
    } else {
      dispatch(actions.addFavorite(link));
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
        {gifs?.data.map((item, index) => {
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
