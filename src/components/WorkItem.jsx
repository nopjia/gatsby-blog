import React from "react";
import { Link } from "gatsby";

export default ({ title, slug, image }) => (
  <Link className="item" to={slug}>
    <div className="image-wrap">
      <div className="image" style={{ backgroundImage: `url(${image})` }} />
    </div>
    <div>{title}</div>
  </Link>
);
