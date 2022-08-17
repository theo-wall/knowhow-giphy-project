import { CardMedia, Grid, Box } from "@mui/material";
import { StyledCard, StyledTypo } from "./gifCard.style";

export type CardProps = {
  item: {
    title: string;
    images: { original: { url: string } };
    user: {
      username: string;
    };
  };
  handleFavorite: (link: string) => void;
};

const gifCard = ({ item, handleFavorite }: CardProps) => {
  // console.log("item.user.username", item?.user?.username);
  return (
    <Grid item>
      <StyledCard>
        <CardMedia
          component="img"
          height="280"
          image={item.images.original.url}
          alt={item.title}
          onClick={() => {
            handleFavorite(item.images.original.url);
          }}
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

export default gifCard;
