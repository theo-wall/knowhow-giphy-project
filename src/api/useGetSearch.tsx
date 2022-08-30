import axios from "axios";
import { baseSearchURL } from "./GiphyBaseUrl";
import { Favorites, RootProps } from "../app/userSlice";
import { useAppSelector } from "../app/hooks";

export const useGetSearch = async (page: number, searchTerms?: string) => {
  const user: RootProps = useAppSelector((state) => state);

  type GiphyResponseType = {
    images: { original: { url: string } };
    url: string;
    title: string;
    username: string;
  };

  const response = await axios.get(
    `${baseSearchURL}&limit=${user.limit}&q=${searchTerms}&offset=${
      user.limit * page
    }`
  );
  const gifResponse: Favorites[] = response.data.data.map(
    (item: GiphyResponseType) => ({
      image_url: item.images.original.url,
      site_url: item.url,
      title: item.title,
      userName: item.username,
    })
  );

  return { gifResponse };
};
