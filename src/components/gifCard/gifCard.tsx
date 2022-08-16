import { CardMedia, Grid, CardContent, Typography } from "@mui/material";
import { StyledCard } from "./gifCard.style";
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
      <StyledCard>
        <CardMedia
          component="img"
          height="280"
          image={item.images.original.url}
          alt={item.title}
        />
        <CardContent>
          <Typography></Typography>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

export default gifCard;
