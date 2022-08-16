import { Card, CardMedia, Grid } from "@mui/material";

const gifCard = ({
  item,
}: {
  item: {
    title: string;
    images: { original: { url: string } };
  };
}) => {
  return (
    <Grid item>
      <Card sx={{ width: "200px", height: "200px" }}>
        <CardMedia
          component="img"
          height="280"
          image={item.images.original.url}
          alt={item.title}
        />
      </Card>
    </Grid>
  );
};

export default gifCard;
