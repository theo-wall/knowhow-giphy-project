import { useState, useEffect } from "react";
import axios from "axios";
import { Favorites } from "../app/userSlice";

// export type GifFields =
//   | {
//       data: [
//         {
//           title: string;
//           images: {
//             original: { url: string };
//           };
//           user: {
//             username: string;
//           };
//         }
//       ];
//       meta: object;
//       pagination: object;
//     }
//   | undefined;

export const useGetGifs = (inFavorites: boolean) => {
  const [gifs, setGifs] = useState<Favorites[]>();

  useEffect(() => {
    const getGifs = async () => {
      const response = await axios.get(
        "https://api.giphy.com/v1/gifs/trending?api_key=WnTEYVz8yJSXIH1ZF4mLgRF33Ey4oC1g&limit=12&rating=g&offset=0"
      );
      if (response.status === 200) {
        const gifResponse = response.data.data.map((item: Favorites) => ({
          url: item.images.original.url,
          title: item.title,
          userName: item.username,
        }));

        setGifs(gifResponse);
      }
    };
    if (!inFavorites) {
      getGifs();
    }
  }, []);

  return { gifs };
};
