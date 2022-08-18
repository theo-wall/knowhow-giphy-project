import { useGetGifs } from "../../hooks/useGetGifs";
import { useAppSelector } from "../../app/hooks";
import { RootProps } from "../../app/userSlice";
import { Box, Grid, Typography } from "@mui/material";
import GifCard from "../gifCard/GifCard";
import {
  ContainerBox,
  LoadingBox,
  MoreButton,
  MoreButtonBox,
  StyledBox,
} from "./GifDisplay.style";
import { useFavorite } from "../../hooks/useFavorite";

// GifDisplay is used in both the Home Page and Favorites Page, to organize all gifs that are displayed. useGetGifs hook is used here to populate the
// array of gifs to display, what is returned here is controlled by (inFavorites, searchTerms, randomize, and page) variables.

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

  const { gifs, loading } = useGetGifs({
    inFavorites,
    searchTerms,
    randomize,
    page,
  });

  const { handleFavorite } = useFavorite();

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
