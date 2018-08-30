import React from "react";
import { Link } from "gatsby";

const getImageUrl = (url) => (url.includes("http") ? url : `/portfolio/${url}`);

export default ({ title, slug, image }) => (
  <Link className="item" to={slug}>
    <div className="image-wrap">
      <div
        className="image"
        style={{ backgroundImage: `url(${getImageUrl(image)})` }}
      />
    </div>
    <div>{title}</div>
  </Link>
);
