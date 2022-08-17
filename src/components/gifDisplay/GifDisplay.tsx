import { useGetGifs } from "../../hooks/useGetGifs";
import { Box, Grid } from "@mui/material";
import GifCard from "../gifCard/gifCard";

const GifDisplay = () => {
  const { gifs } = useGetGifs();
  console.log(gifs);

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
          return <GifCard item={item} key={index} />;
        })}
      </Grid>
    </Box>
  );
};

export default GifDisplay;
