import React from "react";
import { ImageItem } from "./ImageItem";
import { useApi } from "../hooks/useApi";

export const DisplayGifs = ({ category }) => {
  const key = import.meta.env.VITE_GIPHY_KEY;
  const base_url = import.meta.env.VITE_GIPHY_URL;
  let url = "";
  if (category !== "") {
    url = `${base_url}?api_key=${key}&q=${category}&limit=10`;
  }

  const { loading, data, error } = useApi(url);

  return (
    <div className="container-gifs">
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {data !== null
        ? data.map((img) => (
            <ImageItem
              key={img.id}
              title={img.title}
              url={img.images.downsized_medium.url}
            />
          ))
        : ""}
    </div>
  );
};
