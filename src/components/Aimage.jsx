import React from "react";

export default ({ image, title, link }) => (
  <a className="image" href={link || image}>
    <img src={image} alt={title} />
  </a>
);
