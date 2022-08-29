import axios from "axios";
import { baseRandomURL } from "./GiphyBaseUrl";
import { Favorites, RootProps } from "../app/userSlice";
import { useAppSelector } from "../app/hooks";

export const useGetRandom = async () => {
  const user: RootProps = useAppSelector((state) => state);
  const randomGifArray: Favorites[] = [];
  for (let i = 0; i < user.limit; i++) {
    const response = await axios.get(baseRandomURL);
    if (response.status === 200) {
      randomGifArray.push({
        image_url: response.data.data.images.original.url,
        site_url: response.data.data.url,
        title: response.data.data.title,
        userName: response.data.data.username,
      });
    }
  }

  return { randomGifArray };
};
