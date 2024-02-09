import React from "react";

export const ImageItem = ({ title, url }) => {
  return (
    <div className="gif-item">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};
