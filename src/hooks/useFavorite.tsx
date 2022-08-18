import { useAppDispatch, useAppSelector } from "../app/hooks";
import { actions, Favorites, RootProps } from "../app/userSlice";

export const useFavorite = () => {
  const user: RootProps = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

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

  return { handleFavorite };
};
