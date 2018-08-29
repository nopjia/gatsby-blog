import React from "react";

export default ({ image, title }) => (
  <a className="image" href={image}>
    <img src={image} alt={title} />
  </a>
);
