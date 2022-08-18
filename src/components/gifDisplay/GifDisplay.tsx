import { useGetGifs } from "../../hooks/useGetGifs";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { actions, Favorites } from "../../app/userSlice";
import { RootProps } from "../../app/userSlice";
import { Box, Button, Grid, Typography } from "@mui/material";
import GifCard from "../gifCard/GifCard";
import {
  ContainerBox,
  LoadingBox,
  MoreButton,
  MoreButtonBox,
  StyledBox,
} from "./GifDisplay.style";

const GifDisplay = ({
  inFavorites,
  searchTerms,
  randomize,
  handlePage,
  page,
}: {
  inFavorites: boolean;
  searchTerms?: string;
  randomize: boolean;
  handlePage: () => void;
  page: number;
}) => {
  const user: RootProps = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const { gifs, loading } = useGetGifs({
    inFavorites,
    searchTerms,
    randomize,
    page,
  });

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
    <ContainerBox>
      <StyledBox>
        {loading ? (
          <LoadingBox>
            <Box>
              <Typography variant="h3">
                {randomize ? "Randomizing..." : "Loading..."}
              </Typography>
            </Box>
          </LoadingBox>
        ) : (
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
        )}
        <MoreButtonBox>
          {inFavorites || (
            <MoreButton
              onClick={() => {
                handlePage();
              }}
            >
              More
            </MoreButton>
          )}
        </MoreButtonBox>
      </StyledBox>
    </ContainerBox>
  );
};

export default GifDisplay;
