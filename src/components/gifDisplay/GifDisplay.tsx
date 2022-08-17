import { useGetGifs } from "../../hooks/useGetGifs";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { actions } from "../../app/userSlice";
import { Box, Grid } from "@mui/material";
import GifCard from "../gifCard/gifCard";

const GifDisplay = () => {
  const user = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  console.log("user", user);

  const { gifs } = useGetGifs();
  //   console.log(gifs);

  const handleFavorite = (link: string) => {
    dispatch(actions.addFavorite([link]));
    // console.log("link", link);
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
            <GifCard item={item} key={index} handleFavorite={handleFavorite} />
          );
        })}
      </Grid>
    </Box>
  );
};

export default GifDisplay;
