import { useState, useEffect } from "react";
import axios from "axios";

export type GifFields =
  | {
      data: [
        {
          title: string;
          images: {
            original: { url: string };
          };
        }
      ];
      meta: object;
      pagination: object;
    }
  | undefined;

export const useGetGifs = () => {
  const [gifs, setGifs] = useState<GifFields>();

  useEffect(() => {
    const getGifs = async () => {
      const response = await axios.get(
        "https://api.giphy.com/v1/gifs/trending?api_key=WnTEYVz8yJSXIH1ZF4mLgRF33Ey4oC1g&limit=20&rating=g&offset=0"
      );
      if (response.status === 200) {
        setGifs(response.data);
      }
    };
    getGifs();
  }, []);

  return { gifs };
};
